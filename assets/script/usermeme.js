var dogUrl = ('https://www.reddit.com/r/dogmemes/random.json');

function getMeme(){
    fetch('https://www.reddit.com/r/dogmemes/random.json')
      .then(function (response) {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then(function (data){
          console.log(data);
          console.log(data[0].data.children[0].data.url_overridden_by_dest);
      })
}

var catBtn = document.querySelector('#catBtn');

catBtn.addEventListener('click', getMeme);

var dogBtn = document.querySelector('#dogBtn');

dogBtn.addEventListener('click', getMeme);
