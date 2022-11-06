//=======================================================
// SLIDER AUTO SCROLL
//=======================================================
//  WITH BUTTONS 


const nextBtn = document.querySelector('.right_btn');
const prevBtn = document.querySelector('.left_btn');
const cardContainer = document.querySelector('.slider_cards');
const cards = document.querySelectorAll('.slider_cards_card');
let cardWidth = document.querySelector('.slider_cards  :first-child').offsetWidth + 24;

//parameters
const perView = 4;
let scrollCount = 0;
let delay = 5000;

cardContainer.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
    cardContainer.insertAdjacentHTML('beforeend', cards[i].outerHTML);
}

let autoscroll = setInterval(() => {
    scroll(true);
}, delay);

const scroll = (direction) => {
    // !!! bool Direction == true => slide left 
    if (direction)
        scrollCount++;

    if (scrollCount == cards.length + 1) {
        scrollCount = 1;
        cardContainer.style.left = 0;
        cardContainer.style.transition = '0s';

        refreshInterval();

    }
    if (scrollCount == -1) {
        scrollCount = cards.length;
        cardContainer.style.transition = '0s';
        cardContainer.style.left = 0;
        cardContainer.style.transition = '0s';
        refreshInterval();
    }

    cardWidth = document.querySelector('.slider_cards  :first-child').offsetWidth + 24;

    if(scrollCount != cards.length)
    cardContainer.style.transition = '0.3s';


    if (direction)
        cardContainer.style.left = `-${scrollCount * cardWidth}px`;
    if (!direction) {
        cardContainer.style.left = `-${scrollCount * cardWidth}px`;
    }


};

//====================================
// adding btn events
//====================================
nextBtn.addEventListener('click', () => {
    scroll(true);
    refreshInterval();
});

prevBtn.addEventListener('click', () => {
    scrollCount--;
    scroll(false);
    refreshInterval();
});


const refreshInterval = () => {
    clearInterval(autoscroll);
    autoscroll = setInterval(() => {
        scroll(true);
    }, delay);
};