let columnTwo = document.getElementById('column_two');
let columnThree = document.getElementById('column_three');
let columnFour = document.getElementById('column_four');
let columnFive = document.getElementById('column_five');
let columnSix = document.getElementById('column_six');


function coltwo() {
    columnTwo.parentElement.nextElementSibling.style.width = '70%';
    columnTwo.parentElement.nextElementSibling.style.gridTemplateColumns = "1fr 1fr";
}
function colthree() {
    columnTwo.parentElement.nextElementSibling.style.width = '70%';
    columnTwo.parentElement.nextElementSibling.style.gridTemplateColumns = "1fr 1fr 1fr";
}
function colfour() {
    columnTwo.parentElement.nextElementSibling.style.width = '80%';
    columnTwo.parentElement.nextElementSibling.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
}
function colfive() {
    columnTwo.parentElement.nextElementSibling.style.width = '90%';
    columnTwo.parentElement.nextElementSibling.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
}
function colsix() {
    columnTwo.parentElement.nextElementSibling.style.width = '100%';
    columnTwo.parentElement.nextElementSibling.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
}

columnTwo.addEventListener('click', coltwo);
columnThree.addEventListener('click', colthree);
columnFour.addEventListener('click', colfour);
columnFive.addEventListener('click', colfive);
columnSix.addEventListener('click', colsix);