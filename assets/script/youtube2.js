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
                    width: '100%', 
                    videoId: '5qap5aO4i9A',
                    playerVars: {
                        autoplay: 1,
                        playsinline: 1,
                        mute: 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                    }
                });
            }

            function onPlayerReady(e) {
                console.log('ready');
                
                // will autoplay
                e.target.mute();
                e.target.playVideo();
            }
                function toggleSound() {
                    if (player.isMuted()) {
                      player.unMute()
                    } else {
                      player.mute()
                  }
                  }
