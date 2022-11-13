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

let myCart = [];
if (!Object.keys(localStorage).includes('myCart')) {
    localStorage.setItem('myCart', JSON.stringify(myCart));
}

const column = document.querySelector('.column');
let productCount = document.getElementById("productCount");
const data = fetch("./js/dummy.json")
    .then((res) => res.json())
    .then((data) => {
        data?.map((item) => (

            column.innerHTML += `
    <div id="${item.id}" class="column_card">
    <div class="column_status">New</div>
    <a class="column_info">
    <p class="column_name">${item.name}</p>
    <p class="column_price">${item.price}₼</p>
    <button class="cart_btn small">Add to cart</button>
</a>
<img src="${item.url}" width="100%" alt="" />
</div>`
        ))
        column.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart_btn')) {
                let wantedId = e.target.parentElement.parentElement.id;
                data.forEach(e => {
                    if (e.id == wantedId) {
                        let OldCart = JSON.parse(localStorage.getItem('myCart'));
                        let NewCart = OldCart;
                        let ExtraCart = [];
                        let hasItem = false;
                        if (OldCart.length > 0) {

                            NewCart = OldCart.map((item) => {
                                if (item.id == wantedId) {
                                    item.cartCount++;
                                    item.count--;
                                    hasItem = true;
                                }
                                return item;
                            })
                            if (!hasItem) {
                                ExtraCart.push(e);
                            }
                        }
                        else {
                            NewCart.push(e);
                        }
                        NewCart = NewCart.concat(ExtraCart);
                        localStorage.setItem('myCart', JSON.stringify(NewCart));
                        total();
                    }
                });
            }
        })
    });