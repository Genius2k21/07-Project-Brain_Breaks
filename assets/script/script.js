// This handles the main section of the screens / hiding screens and displaying screens 

//screens 
var welcomePage = document.getElementById("welcome");
var setTimerPage = document.getElementById("set_time");
var chooseMemePage = document.getElementById("choose_meme");
var focusTimerPage = document.getElementById("countdown");
var brainBreakPage = document.getElementById("break-page");
var memeViewerPage = document.getElementById("memeViewer");
var pause = document.getElementById("pauseBtn");
var timerSet = document.getElementById("time_select");


//buttons 
var welcomeSaveButton = document.getElementById("submitname");
var setTimeBtn = document.getElementById("set_time_btn");
var catBtn = document.getElementById("catBtn");
var dogBtn = document.getElementById("dogBtn");
var sportBtn = document.getElementById("sportBtn");
var dankBtn = document.getElementById("dankBtn");
var wholesomeBtn = document.getElementById("wholesomeBtn");
var takeMyBreakBtn = document.getElementById("break-button");
var play = document.querySelector("#playBtn");



//on start up all screens are hidden except welcome page
setTimerPage.classList.add("hide");
chooseMemePage.classList.add("hide");
focusTimerPage.classList.add("hide");
brainBreakPage.classList.add("hide");

//RESOLVED(BUG!!!!! When this is commented out, the memes show up.)
memeViewerPage.classList.add("hide");

//when break timer reaches 0, goes back to timer page

//when user clicks save, transition waits 5 seconds before going to timer set page
welcomeSaveButton.addEventListener("click", function(e) {
    setTimeout(function() {
        welcomePage.classList.add("hide");
        setTimerPage.classList.remove("hide");
        timerSet.value = "60";
    }, 4000);
});

welcomeSaveButton.addEventListener("click", function(e) {
    setTimeout(function() {
        welcomePage.classList.add("hide");
        setTimerPage.classList.remove("hide");
    }, 4000);
});


//when user clicks on set Time button then it goes to Choose Meme Page
setTimeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    setTimerPage.classList.add("hide");
    chooseMemePage.classList.remove("hide");
});

//when user clicks on a category, user goes to focus timer page
function displaynewPage() {
    chooseMemePage.classList.add("hide");
    focusTimerPage.classList.remove("hide");
    play.classList.remove("hide");
    pause.classList.add("hide");
}

catBtn.addEventListener("click", displaynewPage);
dogBtn.addEventListener("click", displaynewPage);
sportBtn.addEventListener("click", displaynewPage);
dankBtn.addEventListener("click", displaynewPage);
wholesomeBtn.addEventListener("click", displaynewPage);

//when countdown timer reaches 0 goes to break page
//this is in the countdown function in countdown.js