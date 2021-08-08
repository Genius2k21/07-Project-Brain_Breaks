var playMusic = document.getElementById("play-music"); 
var muteMusic = document.getElementById("mute-music");  
var control = document.querySelector('#mute-video'); 

var player;

muteMusic.classList.add("hide"); 

playMusic.addEventListener("click", function() {
    playMusic.classList.add("hide"); 
    muteMusic.classList.remove("hide"); 
    player.unMute(); 
})

muteMusic.addEventListener("click", function() {
    muteMusic.classList.add("hide"); 
    playMusic.classList.remove("hide"); 
    player.mute(); 
})

function onYouTubeIframeAPIReady() {
    console.log('iFrame Ready');

    player = new YT.Player('player', { // player param is dom element id
        height: '150',
        videoId: '5qap5aO4i9A',
        playerVars: {
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: true, // modestbranding conflicts with showinfo
            autoplay: 1,
            mute: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(e) {
    console.log('ready');
    
    // will autoplay
    e.target.mute();
}

function toggleSound() {
    if (player.isMuted()) {
        player.unMute()
    } else {
        player.mute()
    }
}

function onPlayerStateChange(e) {
    console.log('on state change');
}
