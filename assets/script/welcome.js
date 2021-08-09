const getName = document.querySelector(".entername");
const submitBtn = document.querySelector("#submitname");
const input = document.querySelector("input");
const h2 = document.getElementById("welcome-alert");

//global variable for user name input
var userName;

input.addEventListener("submit", function (event) {
  event.preventDefault();
});

//when user clicks submit button, then...
submitBtn.addEventListener("click", function () {
  //grabs user's name from input
  userName = getName.value;
  //saves user's name into local storage under name
  localStorage.setItem("name", userName);
  //runs displayName function
  displayName();
});

//when user submits their name, it displays user's name underneath submit button
function displayName() {
  if (localStorage.getItem("name")) {
    const name = localStorage.getItem("name");
    h2.textContent = `Welcome ${name}! Our goal is to help you make the most out of your hectic workday with this
        timer. We hope you enjoy!`;
  }
}

getName.addEventListener("change", checkForm);

function checkForm() {
    if (getName.value == "") {
        console.log("no name");
    } else {
        submitBtn.classList.remove('disabled');
    }
}
      

