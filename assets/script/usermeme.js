var dogUrl = "https://www.reddit.com/r/dogmemes/random.json";
var catBtn = document.querySelector("#catBtn");
var dogBtn = document.querySelector("#dogBtn");
var sportBtn = document.querySelector("#sportBtn");
var dankBtn = document.querySelector("#dankBtn");
var wholesomeBtn = document.querySelector("#wholesomeBtn");
var historyBtn = document.querySelector("#historyBtn");

var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiperCont = document.querySelector(".swiper-container");
var swiperSlide = document.querySelector(".swiper-slide");

memeBank = [];

function getDogMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/dogmemes/random.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) throw Error("Error");
        return;
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          if (
            stringURL.charAt(8) == "i" &&
            stringURL.charAt(10) !== "i" &&
            stringURL.charAt(9) !== "m"
          ) {
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<img src="' +
              stringURL +
              '" width="' +
              swiperCont.offsetWidth +
              '">';
            swiperWrapper.appendChild(divEl);
          } else if (
            stringURL.charAt(8) == "v" &&
            stringURL.charAt(10) !== "i"
          ) {
            console.log(data);
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<video loop autoplay width="' +
              swiperCont.offsetWidth +
              '"> <source src="' +
              data[0].data.children[0].data.secure_media.reddit_video
                .fallback_url +
              '"></video>';
            swiperWrapper.appendChild(divEl);
          } else {
            console.log("IMGUR");
          }
        }
      });
  }
}

function getCatMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/Catmemes/random.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) throw Error("Error");
        return;
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          if (
            stringURL.charAt(8) == "i" &&
            stringURL.charAt(10) !== "i" &&
            stringURL.charAt(9) !== "m"
          ) {
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<img src="' +
              stringURL +
              '" width="' +
              swiperCont.offsetWidth +
              '">';
            swiperWrapper.appendChild(divEl);
          } else if (
            stringURL.charAt(8) == "v" &&
            stringURL.charAt(10) !== "i"
          ) {
            console.log(data);
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<video loop autoplay width="' +
              swiperCont.offsetWidth +
              '"> <source src="' +
              data[0].data.children[0].data.secure_media.reddit_video
                .fallback_url +
              '"></video>';
            swiperWrapper.appendChild(divEl);
          } else {
            console.log("IMGUR");
          }
        }
      });
  }
}

function getSportMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/SportsMemes/random.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) throw Error("Error");
        return;
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          if (
            stringURL.charAt(8) == "i" &&
            stringURL.charAt(10) !== "i" &&
            stringURL.charAt(9) !== "m"
          ) {
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<img src="' +
              stringURL +
              '" width="' +
              swiperCont.offsetWidth +
              '">';
            swiperWrapper.appendChild(divEl);
          } else if (
            stringURL.charAt(8) == "v" &&
            stringURL.charAt(10) !== "i"
          ) {
            console.log(data);
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<video loop autoplay width="' +
              swiperCont.offsetWidth +
              '"> <source src="' +
              data[0].data.children[0].data.secure_media.reddit_video
                .fallback_url +
              '"></video>';
            swiperWrapper.appendChild(divEl);
          } else {
            console.log("IMGUR");
          }
        }
      });
  }
}

function getDankMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/dankmemes/random.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) throw Error("Error");
        return;
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          if (
            stringURL.charAt(8) == "i" &&
            stringURL.charAt(10) !== "i" &&
            stringURL.charAt(9) !== "m"
          ) {
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<img src="' +
              stringURL +
              '" width="' +
              swiperCont.offsetWidth +
              '">';
            swiperWrapper.appendChild(divEl);
          } else if (
            stringURL.charAt(8) == "v" &&
            stringURL.charAt(10) !== "i"
          ) {
            console.log(data);
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<video loop autoplay width="' +
              swiperCont.offsetWidth +
              '"> <source src="' +
              data[0].data.children[0].data.secure_media.reddit_video
                .fallback_url +
              '"></video>';
            swiperWrapper.appendChild(divEl);
          } else {
            console.log("IMGUR");
          }
        }
      });
  }
}

function getWholesomeMemes() {
  for (i = 0; i < 100; i++) {
    fetch("https://www.reddit.com/r/wholesomememes/random.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) throw Error("Error");
        return;
      })
      .then(function (data) {
        if (
          data[0].data.children[0].data.url_overridden_by_dest.includes("www")
        ) {
          console.log("bad link");
        } else {
          var stringURL = data[0].data.children[0].data.url_overridden_by_dest;
          // console.log(src);
          if (
            stringURL.charAt(8) == "i" &&
            stringURL.charAt(10) !== "i" &&
            stringURL.charAt(9) !== "m"
          ) {
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<img src="' +
              stringURL +
              '" width="' +
              swiperCont.offsetWidth +
              '">';
            swiperWrapper.appendChild(divEl);
          } else if (
            stringURL.charAt(8) == "v" &&
            stringURL.charAt(10) !== "i"
          ) {
            console.log(data);
            var divEl = document.createElement("div");
            divEl.classList.add("swiper-slide");
            console.log(divEl);
            divEl.innerHTML =
              '<video autoplay controls mute loop width="' +
              swiperCont.offsetWidth +
              '"> <source src="' +
              data[0].data.children[0].data.secure_media.reddit_video
                .fallback_url +
              '"></video>';
            swiperWrapper.appendChild(divEl);
          } else {
            console.log("IMGUR");
          }
        }
      });
  }
}

catBtn.addEventListener("click", getCatMemes);
dogBtn.addEventListener("click", getDogMemes);
sportBtn.addEventListener("click", getSportMemes);
dankBtn.addEventListener("click", getDankMemes);
wholesomeBtn.addEventListener("click", getWholesomeMemes);

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

console.log(screen.width);

