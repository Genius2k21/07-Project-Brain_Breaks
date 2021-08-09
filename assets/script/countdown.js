var play = document.querySelector("#playBtn");
var pause = document.getElementById("pauseBtn");
var resume = document.getElementById("resumeBtn");
var outline = document.querySelector(".track_outline circle");
var movingOutline = document.querySelector(".moving_outline circle");
var plusOneMinute = document.querySelector("#plus_one");
var timeDisplay = document.querySelector("#time_display");
var setTimeBtn = document.querySelector("#set_time_btn");
var selectedTimeEl = document.querySelector("#selected_time");
var slider = document.querySelector("#time_select");
var breakTimeTextEl = document.querySelector("#calc_break_time");
var brainBreakPage = document.getElementById("break-page");

var memeViewerPage = document.getElementById("memeViewer");
var takeMyBreakBtn = document.getElementById("break-button");
var setTimerPage = document.getElementById("set_time");
var focusTimerPage = document.getElementById("countdown");
var titleEl = document.getElementsByClassName("title");

var focusTime;
var breakTime;
let startingSeconds;
var formattedFocusTime;
var formattedBreakTime;
var paused;
var initial;

slider.addEventListener("change", function () {
  setTimeBtn.classList.remove("disabled");
});

//saves timer state into local storage
localStorage.setItem("btn", "focus");

//hides both the pause and resume timer buttons
pause.classList.add("hide");
resume.classList.add("hide");

function setLocalStorage() {
  localStorage.setItem("focusTime", focusTime);
  localStorage.setItem("breakTime", breakTime);
  localStorage.setItem("startingSeconds", startingSeconds);
}

//adds event listener to the slider
slider.addEventListener("change", function () {
  //this grabs the slider's value
  var liveFocusTime = slider.value;
  //this calculates the user's breaktime
  breakTimeTextEl.textContent = Math.floor(liveFocusTime * 0.2);

  //saves both times into the empty arrays
  breakTime = liveFocusTime * 0.2;
  focusTime = liveFocusTime * 1;
  startingSeconds = liveFocusTime * 60;

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

//when user clicks on play button, then countdown function is called
var startTimer = play.addEventListener("click", function () {
  countdown();
  //hides the play button and shows the pause button
  play.classList.add("hide");
  pause.classList.remove("hide");

  //gets the current state of the timer focused or break
  btn = localStorage.getItem("btn");

  paused = false;
});
function countdown() {
  initial = window.setInterval(function () {
    btn = localStorage.getItem("btn");
    //time is converted to seconds so interval can count down by seconds
    var time = startingSeconds;
    //converts the remaining seconds to number of hours
    var hours = Math.floor(time / 3600);
    //what does this do????
    time %= 3600;
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

    //adds an extra 0 for minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes;
    }

    if (startingSeconds < 3600) {
      document.title =
        "Brain Breaks (" + hours + ":" + minutes + ":" + seconds + ")";
    }

    //display countdown on screen
    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;

    //when time reaches 0, clear timer
    if (startingSeconds === 0) {
      timeDisplay.textContent = 0 + ":" + 0 + 0 + ":" + 0 + 0;
      clearInterval(initial);
      runConfetti();
      document.title = "Brain Breaks";
    }
  }, 1000);
}

var pauseTimer = pause.addEventListener("click", function (timer) {
  clearInterval(initial);
  //hides the pause button and shows the resume button
  pause.classList.add("hide");
  resume.classList.remove("hide");
  paused = true;
});

var resumeTimer = resume.addEventListener("click", function () {
  paused = false;
  countdown();
  pause.classList.remove("hide");
  resume.classList.add("hide");
});

function addMinute() {
  console.log("add minute");
  startingSeconds = startingSeconds + 60;
}

plusOneMinute.addEventListener("click", addMinute);

//add confetti drop
function runConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  brainBreakPage.classList.remove("hide");
  focusTimerPage.classList.add("hide");
}

//when user clicks on take a break button, break timer starts and user goes to meme page
takeMyBreakBtn.addEventListener("click", function () {
  brainBreakPage.classList.add("hide");
  memeViewerPage.classList.remove("hide");
  setTimeout(function () {
    memeViewerPage.classList.add("hide");
    setTimerPage.classList.remove("hide");
    document.querySelector(".swiper-wrapper").innerHTML = "";
  }, breakTime * 60 * 1000);
});
