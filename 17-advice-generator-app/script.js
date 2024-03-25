
const apiUrl = 'https://api.adviceslip.com/advice/';
const number = document.getElementById("number");
const advice = document.getElementById("advice");
let degrees = 0;
newFetch();

function newFetch(){
  let randomNum = Math.floor(Math.random() * 225);
  let randomUrl = apiUrl + `${randomNum}`;
  fetch(randomUrl)

    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      number.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function rotateImage() {
  degrees += 270;
  var myImage = document.getElementById("circle");
  myImage.style.transform = `rotate(${degrees}deg)`;

}