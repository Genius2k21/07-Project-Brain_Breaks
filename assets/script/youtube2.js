


var player;

            function onYouTubeIframeAPIReady() {
                console.log('iFrame Ready');

                player = new YT.Player('player', { // player param is dom element id
                    height: '400',
                    width: '400',
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
            