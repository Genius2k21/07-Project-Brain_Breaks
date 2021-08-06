var dogUrl = "https://www.reddit.com/r/dogmemes/random.json";
var catBtn = document.querySelector("#catBtn");
var dogBtn = document.querySelector("#dogBtn");
var swiperWrapper = document.querySelector(".swiper-wrapper");

memeBank = [];

function getDogMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/dogmemes/random.json")
      .then(function (response) {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          var divEl = document.createElement("div");
          divEl.classList.add("swiper-slide");
          console.log(divEl);
          divEl.innerHTML =
            '<img src="' + stringURL + '" width="' + screen.width + '">';
          swiperWrapper.appendChild(divEl);
        }
        // console.log(memeBank);
      });
  }
}

function getCatMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/Catmemes/random.json")
      .then(function (response) {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          var divEl = document.createElement("div");
          divEl.classList.add("swiper-slide");
          console.log(divEl);
          divEl.innerHTML = '<img src="' + stringURL + '" width="' + 342 + '">';
          swiperWrapper.appendChild(divEl);
        }
        // console.log(memeBank);
      });
  }
}

catBtn.addEventListener("click", getCatMemes);

dogBtn.addEventListener("click", getDogMemes);

//this saves the user's choice into local storage
// function setLocalStorage(event) {
//   localStorage.setItem("User-Choice", event.target.value);
// }

function getUserChoice(event) {
  //this logs the value of the user's choice button
  var userChoice = event.target.value;
  setLocalStorage(event);
  console.log(userChoice);
}
