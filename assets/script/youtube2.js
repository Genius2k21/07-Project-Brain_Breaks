var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playMusic = document.getElementById("play-music");
var muteMusic = document.getElementById("mute-music");
var control = document.querySelector("#mute-video");
var container = document.querySelector(".music-controls");

var player;

muteMusic.classList.add("hide");

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    // player param is dom element id
    height: "0",
    width: "0",
    videoId: "5qap5aO4i9A",
    playerVars: {
      autoplay: 1,
      playsinline: 1,
      mute: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(e) {
  // will autoplay
  e.target.mute();
  e.target.playVideo();
}

//Now the entire button is clickable, not only the play and pause icon.
container.addEventListener("click", function () {
  if (muteMusic.classList.contains("hide")) {
    console.log("playing");
    playMusic.classList.add("hide");
    muteMusic.classList.remove("hide");
    player.unMute();
  } else {
    console.log("not playing");
    muteMusic.classList.add("hide");
    playMusic.classList.remove("hide");
    player.mute();
  }
});
