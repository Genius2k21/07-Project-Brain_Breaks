const getName = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const form = document.querySelector('form');

const h2 = document.querySelector('h2');

form.addEventListener('submit', function(event){
    event.preventDefault();
});

submitBtn.addEventListener('click', function(){
    localStorage.setItem('name', getName.value);
    displayName();
});

function displayName(){
    if(localStorage.getItem('name')){
        const name = localStorage.getItem('name');
        h2.textContent = `Welcome ${name}!`;
    }
}

document.body.onload = displayName;