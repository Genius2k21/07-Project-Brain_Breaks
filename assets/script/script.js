// This handles the main section of the screens / hiding screens and displaying screens

//screens
var welcomePage = document.getElementById("welcome");
var setTimerPage = document.getElementById("set_time");
var chooseMemePage = document.getElementById("choose_meme");
var focusTimerPage = document.getElementById("countdown");
var brainBreakPage = document.getElementById("break-page");
var memeViewerPage = document.getElementById("memeViewer");

//buttons
var welcomeSaveButton = document.getElementById("submitname");
var setTimeBtn = document.getElementById("set_time_btn");
var catBtn = document.getElementById("catBtn");
var dogBtn = document.getElementById("dogBtn");
var takeMyBreakBtn = document.getElementById("break-button");

//on start up all screens are hidden except welcome page
setTimerPage.classList.add("hide");
chooseMemePage.classList.add("hide");
focusTimerPage.classList.add("hide");
brainBreakPage.classList.add("hide");

//RESOLVED(BUG!!!!! When this is commented out, the memes show up.)
memeViewerPage.classList.add("hide");

//when break timer reaches 0, goes back to timer page

//when user clicks save, transition waits 5 seconds before going to timer set page
welcomeSaveButton.addEventListener("click", function (e) {
  setTimeout(function () {
    welcomePage.classList.add("hide");
    setTimerPage.classList.remove("hide");
  }, 4000);
});


//when user clicks on set Time button then it goes to Choose Meme Page
setTimeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  setTimerPage.classList.add("hide");
  chooseMemePage.classList.remove("hide");
});

//when user clicks on a category, user goes to focus timer page
catBtn.addEventListener("click", function () {
  chooseMemePage.classList.add("hide");
  focusTimerPage.classList.remove("hide");
});
dogBtn.addEventListener("click", function () {
  chooseMemePage.classList.add("hide");
  focusTimerPage.classList.remove("hide");
});

//when countdown timer reaches 0 goes to break page
//this is in the countdown function in countdown.js
