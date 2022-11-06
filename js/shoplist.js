//=======================================================
// SLIDER AUTO SCROLL
//=======================================================


const cardContainer = document.querySelector('.slider_cards');
const cards = document.querySelectorAll('.slider_cards_card');
//parameters
const perView = 5;
let scrollCount = 0;
let delay = 2000;

cardContainer.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
    cardContainer.insertAdjacentHTML('beforeend', cards[i].outerHTML);
}

let autoscroll = setInterval(() => {
    scroll();
}, delay);

const scroll = () => {
    scrollCount++;
    if (scrollCount == cards.length + 1) {
        scrollCount = 1;
        clearInterval(autoscroll);
        cardContainer.style.transition = '0s';
        cardContainer.style.left = 0;
        autoscroll = setInterval(() => {
            scroll();
        }, delay);

    }
    const cardWidth = document.querySelector('.slider_cards  :first-child').offsetWidth + 24;
    cardContainer.style.transition = '0.3s';
    cardContainer.style.left = `-${scrollCount * cardWidth}px`;
};