const buttons = document.getElementsByClassName("raiting"); //loads all raiting buttons
const button = document.getElementsByClassName("submit");   //laods submit button
const start = document.getElementsByClassName("start");     //loads first page component
const end = document.getElementsByClassName("end");         //loads last page component
let rating = 0;                                             

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    rating = i+1;                                           //updates rating variable
  });
}
button[0].addEventListener("click", function() {            //When submit button is clicked and 
    if(rating){                                             //theres a valid rating, 
    start[0].style.display = "none";                        //hides current page and
    end[0].style.display = "flex";                          //loads the last (thankyou) page;
    document.getElementById("picked").textContent = rating; //also updates the rating that is gonna display.
    }
});