let popup = document.getElementById('popup');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
function openPopup() {popup.classList.add("open-popup");}
function closePopup() {popup.classList.remove("open-popup");}
openbtn.addEventListener('click',openPopup);
closebtn.addEventListener('click',closePopup);