var play = document.querySelector("#playBtn");
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

  //formats timer in the date format 
  formattedFocusTime = new Date(focusTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);

  formattedBreakTime = new Date(breakTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);

});

function setTimeDisplay() {
  timeDisplay.textContent = formattedFocusTime;
}

setTimeBtn.addEventListener("click", setTimeDisplay);

var startTimer = play.addEventListener("click", () =>
  window.setInterval(function () {
    play.classList.add("hide");

    let time = startingSeconds;
    hours = Math.floor(time / 3600);
    time %= 3600;
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds;
    }

    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;

    startingSeconds--;

    if (time == 0) {
      clearInterval(startTimer);
    }
  }, 1000)
);

// play.addEventListener("click", () =>

// play.addEventListener("click", timer());

// function startWorkTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//     setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

// }, 1000);

// movingOutlineLength = outline.getTotalLength();
// console.log(movingOutlineLength);

// movingOutline.style.strokeDasharray = movingOutlineLength;
// movingOutline.style.strokeDashoffset = movingOutlineLength;
