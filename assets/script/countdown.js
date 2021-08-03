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

var formattedFocusTime = [];
var formattedBreakTime = [];

slider.addEventListener("change", function () {
  focusTime = [];
  breakTime = [];
  var liveFocusTime = slider.value;
  breakTimeTextEl.innerText = liveFocusTime * 0.2;
  breakTime.push(liveFocusTime * 0.2);
  focusTime.push(liveFocusTime);
  console.log(focusTime);
  console.log(breakTime);

  formattedFocusTime = new Date(focusTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);

  formattedBreakTime = new Date(breakTime * 60 * 1000)
    .toISOString()
    .substr(12, 4);
  console.log(formattedFocusTime);
  console.log(formattedBreakTime);
});

function setTimeDisplay() {
  timeDisplay.textContent = formattedFocusTime;
}

setTimeBtn.addEventListener("click", setTimeDisplay);

// movingOutlineLength = outline.getTotalLength();
// console.log(movingOutlineLength);

// movingOutline.style.strokeDasharray = movingOutlineLength;
// movingOutline.style.strokeDashoffset = movingOutlineLength;
