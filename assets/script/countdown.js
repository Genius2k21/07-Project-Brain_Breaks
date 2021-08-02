var play = document.querySelector('#playBtn');
var outline = document.querySelector('.track_outline circle');
var movingOutline = document.querySelector('.moving_outline circle');
var addMinute = document.querySelector('#plus_one');
var timeDisplay = document.querySelector('#time_display');
var setTimeBtn = document.querySelector("#set_time_btn")
var selectedTimeEl = document.querySelector("#selected_time");

movingOutlineLength = outline.getTotalLength();
console.log(movingOutlineLength);

movingOutline.style.strokeDasharray = movingOutlineLength;
movingOutline.style.strokeDashoffset = movingOutlineLength; 

var focusTime = []

setTimeBtn.addEventListener("click", function(){
    focusTime = [];
    var selectedTime = document.querySelector('#time_select').value;
    seconds = selectedTime * 60;
    var formattedTime = new Date(seconds * 1000).toISOString().substr(12, 4)

    timeDisplay.textContent = formattedTime;
});

function updateTextInput(val) {
    selectedTimeEl.value=val; 
  }






