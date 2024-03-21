document.getElementById("autofocus").focus();
const items = document.getElementsByClassName("item");             //we load all items needed to be filled
const selectors = document.getElementsByClassName("selector");     //we load all buttons (Daily/Weekly/Monthly)
let selected = "weekly";                                           //default timeframe that will load
let images = {                                                     //object with all backgrounImages paths
    0: './images/icon-work.svg',
    1: './images/icon-play.svg',
    2: './images/icon-study.svg',
    3: './images/icon-exercise.svg',
    4: './images/icon-social.svg',
    5: './images/icon-self-care.svg'
}
let timeframe = {                                                  //object with all timeframes word (needed for calling data file)
    0:"daily",
    1:"weekly",
    2:"monthly"
}
let word = {                                                       //object with all words por previous state word
    "daily":"Day",
    "weekly":"Week",
    "monthly":"Month"
}
for(let i = 0; i< items.length; i++){ //data that will be filled on page load
    items[i].getElementsByClassName("title")[0].textContent = data[i].title;                                //title from data file gets applied
    items[i].getElementsByClassName("current")[0].textContent = data[i].timeframes[selected].current;       //current data from file gets applied
    items[i].getElementsByClassName("previous")[0].textContent = data[i].timeframes[selected].previous;     //previous data from file gets applied
    items[i].getElementsByClassName("previousWord")[0].textContent = word[selected];                        //previous data from file gets applied
    items[i].style['background-image'] = `url('${images[i]}')`;                                             //Img url gets applied to style backgroundImage
}

for (let i = 0; i < selectors.length; i++) { //data that will be filed on state change (button pressed)
    selectors[i].addEventListener("click", function() {
    selected = timeframe[i];
    
    for(let i = 0; i< items.length; i++){
        items[i].getElementsByClassName("title")[0].textContent = data[i].title;                                //title from data file gets applied
        items[i].getElementsByClassName("current")[0].textContent = data[i].timeframes[selected].current;       //current data from file gets applied
        items[i].getElementsByClassName("previous")[0].textContent = data[i].timeframes[selected].previous;     //previous data from file gets applied
        items[i].getElementsByClassName("previousWord")[0].textContent = word[selected];                        //previous data from file gets applied
        items[i].style['background-image'] = `url('${images[i]}')`;                                             //Img url gets applied to style backgroundImage
    }
  });
}