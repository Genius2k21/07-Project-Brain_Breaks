
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

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
            

            function controlMute() {
                player.mute();
            }

            function controlUnmute() {
                player.unMute();
            }



            var control = document.querySelector('#mute-video');
            control.addEventListener('click', function(event){
                // event.preventDefault();
                toggleSound();
            });
            
            // var toggleBtn = document.querySelector('#toggle');
            // toggleBtn.addEventListener('click', function(event){
            //     if (event.checked = true){
            //         controlUnmute();
            //         console.log('hi');
            //     } else if (event.checked = false){
            //         player.mute();
            //         console.log('hello');
            //     } 
            // });
            