var play = document.querySelector("#playBtn");
var pause = document.getElementById("pauseBtn"); 
const bell = document.querySelector("audio"); 
const mindiv = document.querySelector("#time_display_mins"); 
const secdiv = document.querySelector("#time_display_secs");
const circle = document.querySelector(".progress-ring_circle"); 
var setTimeBtn = document.querySelector("#set_time_btn");
var selectedTimeEl = document.querySelector("#selected_time");
var slider = document.querySelector("#time_select");
var breakTimeTextEl = document.querySelector("#calc_break_time");
var addOne = document.querySelector("#plus_one");

var focusTime;
var breakTime;
let startingSeconds;
var formattedFocusTime;
var formattedBreakTime;

let initial, totalsecs, perc, paused, mins, seconds; 

const radius = circle.r.baseVal.value; 
 
//this calculates the circumference of our circle 
const circumference = radius * 2 * Math.PI; 

//stroke-dasharray is like border-style:dashed, but it lets you define the width of the dashes and the gap between them 
circle.style.strokeDasharray = circumference; 
circle.style.strokeDashoffset = circumference; 

pause.classList.add("hide"); 

function setLocalStorage() {
  localStorage.setItem("focusTime", focusTime);
  localStorage.setItem("breakTime", breakTime);
  localStorage.setItem("btn", "focus"); 
}

//adds event listener to the slider
slider.addEventListener("change", function () {
  //this grabs the slider's value
  var liveFocusTime = slider.value;
  //this calculates the user's breaktime
  breakTimeTextEl.innerText = liveFocusTime * 0.2;

  //saves both times into the empty arrays
  breakTime = liveFocusTime * 0.2;
  focusTime = liveFocusTime * 1;
  startingSeconds = liveFocusTime * 60;

  //formats timer using the date js function
  formattedFocusTime = new Date(focusTime * 60 * 1000)
    .toISOString().substr(12, 4);

  formattedBreakTime = new Date(breakTime * 60 * 1000)
    .toISOString().substr(12, 4);
});

//displays focus time on screen
// function setTimeDisplay() {
//   timeDisplay.textContent = formattedFocusTime;
// }

//when user clicks Set Time button, then time is displayed on screen & saves times into local storage
setTimeBtn.addEventListener("click", function () {
  // setTimeDisplay();
  setLocalStorage();
});

//when user clicks the play button, then ... 
// pause.addEventListener("click", () => {
//   //this checks to see if the timer has been started already, if not, it returns 
//   if (paused === undefined) {
//       return; 
//   }
//   if (paused) {
//       paused = false; 
//       initial = setTimeout(, 60); 
//       pauseBtn.textContent = "pause"; 
//       pauseBtn.classList.remove("resume"); 
//   } else {
//       clearTimeout(initial); 
//       pauseBtn.textContent = "resume"; 
//       pauseBtn.classList.add("resume"); 
//       paused = true; 
//   }
// }); 

//when user clicks on play button, then ...
var startTimer = play.addEventListener("click", () => {
  seconds = mins * 60; 
  totalsecs = mins * 60; 
  setTimeout(decremenT(), 60);  
  paused = false; 
}); 

function decremenT() {
  //this calculates the minutes and seconds remaining 
  mindiv.textContent = Math.floor(seconds / 60); 
  //if seconds is a single digit (EX. 9) then it will return as 09 
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`; 
  //if timer is restarted then it removes the danger class to the circle 
  if (circle.classList.contains("danger")) {
      circle.classList.remove("danger"); 
  }
  if (seconds > 0) {
      percent = Math.ceil(((totalsecs - seconds)/ totalsecs) * 100); 
      setProgress(percent); 
      seconds--; 
      //assign setTimeout("decremenT") to initial var so taht later on for pausing and reseting, we can access this Timeout
      initial = window.setTimeout("decremenT()", 1000); 
      //this creates the pulse feature 
      if (seconds < 10) {
          circle.classList.add("danger"); 
      }
  } else {
      //when timer reaches 0, bell sounds plays 
      mins = 0; 
      seconds = 0; 
      bell.play(); 
      let btn = localStorage.getItem("btn"); 

  }
}


//   window.setInterval(function () {

//     //hides the play button, and shows the pause button 
//     play.classList.add("hide");
//     pause.classList.remove("hide"); 
//     pause.classList.add("show"); 
//     let btn = localStorage.getItem("btn"); 

//     //time is converted to miliseconds so interval can count down by seconds
//     seconds = focusTime * 60; 
//     totalsecs = focusTime * 60; 
//     // let time = startingSeconds;
//     // console.log(startingSeconds); 
//     // hours = Math.floor(time / 3600);
//     // // time %= 3600;
//     // minutes = Math.floor(time / 60);
//     // seconds = time % 60;
     

//     if (circle.classList.contains("danger")) {
//       circle.classList.remove("danger"); 
//     }
//     if (startingSeconds > 0) {
//       percent = Math.ceil(((totalsecs - seconds)/ totalsecs) * 100); 
//         setProgress(percent); 
//         //BUG! We keep getting 0 percent... 
//         console.log(percent); 
//     } 
//     if (startingSeconds < 10) {
//       seconds = "0" + seconds;
//       circle.classList.add("danger");
//     } else {
//       seconds; 
//     }
    
//     //display countdown on screen
//     timeDisplay.textContent = totalsecs; 
//     // hours + ":" + minutes + ":" + seconds;
//     //seconds countdown by 1
//     startingSeconds--;
//     //when time reaches 0, clear timer
//     if (startingSeconds === 0) {
//       clearInterval(startTimer);
//     }
//   }, 1000)
// );

//progress-ring 
function setProgress(percent) {
  const offset = circumference - (percent/100) * circumference;
  circle.style.strokeDashoffset = offset; 
}

function addMinute() {
  console.log("add minute");
  startingSeconds = startingSeconds + 60;
}

addOne.addEventListener("click", addMinute);
