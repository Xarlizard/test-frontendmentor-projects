document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('category1').textContent = data[0].category;
    document.getElementById('score1').textContent = data[0].score;
    document.getElementById('icon1').src = data[0].icon;

    document.getElementById('category2').textContent = data[1].category;
    document.getElementById('score2').textContent = data[1].score;
    document.getElementById('icon2').src = data[1].icon;

    document.getElementById('category3').textContent = data[2].category;
    document.getElementById('score3').textContent = data[2].score;
    document.getElementById('icon3').src = data[2].icon;

    document.getElementById('category4').textContent = data[3].category;
    document.getElementById('score4').textContent = data[3].score;
    document.getElementById('icon4').src = data[3].icon;
});