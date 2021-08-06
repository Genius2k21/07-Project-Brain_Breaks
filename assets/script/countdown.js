var play = document.querySelector("#playBtn");
var pause = document.querySelector("#pauseBtn"); 
var resume = document.querySelector("#resumeBtn"); 
var outline = document.querySelector(".track_outline circle");
var movingOutline = document.querySelector(".moving_outline circle");
var addMinute = document.querySelector("#plus_one");
var timeDisplay = document.querySelector("#time_display");
var setTimeBtn = document.querySelector("#set_time_btn");
var selectedTimeEl = document.querySelector("#selected_time");
var slider = document.querySelector("#time_select");
var breakTimeTextEl = document.querySelector("#calc_break_time");

var focusTime = [];
var breakTime = [];
let startingSeconds = [];
var formattedFocusTime = [];
var formattedBreakTime = [];

pause.classList.add("hide"); 
resume.classList.add("hide"); 

function setLocalStorage() {
localStorage.setItem("focusTime", focusTime); 
localStorage.setItem("breakTime", breakTime); 
}

//adds event listener to the slider 
slider.addEventListener("change", function () {
  //this grabs the slider's value 
  var liveFocusTime = slider.value;
  //this calculates the user's breaktime 
  breakTimeTextEl.innerText = liveFocusTime * 0.2;

  //saves both times into the empty arrays 
  breakTime.push(liveFocusTime * 0.2);
  focusTime.push(liveFocusTime * 1);
  startingSeconds.push(liveFocusTime * 60);

  //formats timer using the date js function 
  formattedFocusTime = new Date(focusTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);

  formattedBreakTime = new Date(breakTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);

});

//displays focus time on screen 
function setTimeDisplay() {
  timeDisplay.textContent = formattedFocusTime;
}

//when user clicks Set Time button, then time is displayed on screen & saves times into local storage 
setTimeBtn.addEventListener("click", function() {
  setTimeDisplay();
  setLocalStorage(); 
}); 

//when user clicks on play button, then countdown function is called 
var startTimer = play.addEventListener("click", countdown); 

var pauseTimer = pause.addEventListener("click", function() {
  //hides the pause button and shows the resume button 
  pause.classList.add("hide"); 
  resume.classList.remove("hide"); 
  //pauses the countdown timer 
})

startingSeconds = 10; 
function countdown() {
  var timer = window.setInterval(function () {
    //hides the play button and shows the pause button 
    play.classList.add("hide");
    pause.classList.remove("hide"); 

    //time is converted to seconds so interval can count down by seconds 
    var time = startingSeconds;
    //converts the remaining seconds to number of hours 
    var hours = Math.floor(time / 3600);
    //what does this do???? 
    // var secdiv = startingSeconds %= 3600;
    // converts the remaining seconds to number of minutes  
    var minutes = Math.floor(time / 60);
    //converts the remaining seconds to number of seconds  
    var seconds = time % 60;

    //seconds countdown by 1 
    startingSeconds--;
    
    // if time is less than 10 seconds, then add an extra 0
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds;
    }

    //display countdown on screen 
    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    
    //when time reaches 0, clear timer 
    if (startingSeconds === 0) {
      clearInterval(timer);
    }
  }, 1000)
}

//
function addMinute() {
  console.log("add minute");
  startingSeconds = startingSeconds + 60;
}

addMinute.addEventListener("click", addMinute);
