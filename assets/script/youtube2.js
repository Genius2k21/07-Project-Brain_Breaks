


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
                        autoplay: 0,
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
                e.target.playVideo();
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
            var control = document.querySelector('.control');
            control.addEventListener('click', function(event){
                event.preventDefault();
            });
            
            var toggleBtn = document.querySelector('#toggle');
            toggleBtn.addEventListener('click', function(event){
                if (event.checked = false){
                    controlMute();
                } else if (event.checked = true){
                    player.unMute();
                    console.log('hello')
                } 
            });
            