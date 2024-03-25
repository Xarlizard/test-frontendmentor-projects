
const apiUrl = 'https://api.adviceslip.com/advice';
let number = document.getElementById("number");
let advice = document.getElementById("advice");

fetch(apiUrl)
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


  function newFetch(){
    console.log("Button pressed");
fetch(apiUrl)
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