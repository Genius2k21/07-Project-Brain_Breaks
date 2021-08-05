var play = document.querySelector("#playBtn");
var pause = document.getElementById("pauseBtn"); 
var outline = document.querySelector(".track_outline circle");
var movingOutline = document.querySelector(".moving_outline circle");
var timeDisplay = document.querySelector("#time_display");
var setTimeBtn = document.querySelector("#set_time_btn");
var selectedTimeEl = document.querySelector("#selected_time");
var slider = document.querySelector("#time_select");
var breakTimeTextEl = document.querySelector("#calc_break_time");
var addOne = document.querySelector("#plus_one");

var focusTime = [];
var breakTime = [];
let startingSeconds = [];
var formattedFocusTime = [];
var formattedBreakTime = [];

pause.classList.add("hide"); 

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
setTimeBtn.addEventListener("click", function () {
  setTimeDisplay();
  setLocalStorage();
});

//when user clicks on play button, then ...
var startTimer = play.addEventListener("click", () =>
  window.setInterval(function () {

    //hides the play button, and shows the pause button 
    play.classList.add("hide");
    pause.classList.remove("hide"); 
    pause.classList.add("show"); 

    //time is converted to miliseconds so interval can count down by seconds
    let time = startingSeconds;
    hours = Math.floor(time / 3600);
    time %= 3600;
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    //if time is less than 10 seconds, then add an extra 0
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds;
    }

    //display countdown on screen
    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    //seconds countdown by 1
    startingSeconds--;
    //when time reaches 0, clear timer
    if (time == 0) {
      clearInterval(startTimer);
    }
  }, 1000)
);

function addMinute() {
  console.log("add minute");
  startingSeconds = startingSeconds + 60;
}

addOne.addEventListener("click", addMinute);
