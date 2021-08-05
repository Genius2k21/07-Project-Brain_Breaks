var dogUrl = "https://www.reddit.com/r/dogmemes/random.json";
var catBtn = document.querySelector("#catBtn");
var dogBtn = document.querySelector("#dogBtn");

memeBank = [];

function getDogMemes() {
  fetch("https://www.reddit.com/r/dogmemes/random.json")
    .then(function (response) {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      console.log(data[0].data.children[0].data.url_overridden_by_dest);
    });
}

function getCatMemes() {
  for (i = 0; i < 10; i++) {
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
          console.log(data[0].data.children[0].data.url_overridden_by_dest);
          memeBank.push(data[0].data.children[0].data.url_overridden_by_dest);
        }
        // console.log(data);
        console.log(memeBank);
      });
  }
}

catBtn.addEventListener("click", getCatMemes);
dogBtn.addEventListener("click", getDogMemes);
