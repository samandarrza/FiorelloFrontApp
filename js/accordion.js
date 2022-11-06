const content = document.getElementsByClassName('accordion_content');
function accordion() {
    this.classList.toggle('active');
}
for (let i = 0; i < content.length; i++) {
    content[i].addEventListener('click',accordion);
}