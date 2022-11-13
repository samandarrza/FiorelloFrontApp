let cart = document.querySelector('.cart');
let productCount = document.getElementById('productCount');
let totalprice = document.getElementById('total');
if (localStorage.getItem("myCart") != null) {
    let arr = JSON.parse(localStorage.getItem("myCart"));
    arr.forEach((item) => {
        let sub = (item.price * 10 * item.cartCount) / 10;
        cart.innerHTML += `            
        <div id="${item.id}" class="card_product">
        <button class="close">X</button>
        <h3><img src="${item.url}" alt=""></h3>
        <h3 class="cart_name">${item.name}</h3>
        <h3>${item.price}₼</h3>
        <h3><div class="cart_count">
        <p class="minus">-</p>
        <p class="num">${item.cartCount}</p>
        <p class="plus">+</p>
        </div></h3>
        <h3 id="${item.id}sub" class="cart_sub">${sub}₼</h3>
        </div>`
    })
    cart.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            let wantedId = e.target.parentElement.id;
            let arr = JSON.parse(localStorage.getItem("myCart"));
            let newArr = arr.filter(product => product.id != wantedId);
            localStorage.setItem('myCart', JSON.stringify(newArr));
            window.location.reload();
            totalUpdate();
        }
        else if (e.target.classList.contains('plus')) {
            let arr = JSON.parse(localStorage.getItem("myCart"));
            let wantedId = e.target.parentElement.parentElement.parentElement.id;
            let newArr = arr.map(product => {
                if (product.id == wantedId) {
                    product.cartCount++;
                    e.target.previousElementSibling.innerText = product.cartCount;
                    document.getElementById(`${wantedId}sub`).innerText = (product.price * 10 * product.cartCount) / 10 + '₼';
                    return product;
                }
                return product;
            })
            localStorage.setItem('myCart', JSON.stringify(newArr));
            totalUpdate();
        }
        else if (e.target.classList.contains('minus')) {
            let arr = JSON.parse(localStorage.getItem("myCart"));
            let wantedId = e.target.parentElement.parentElement.parentElement.id;
            let newArr = arr.map(product => {
                if (product.id == wantedId) {
                    if (product.cartCount > 1) {
                        product.cartCount--;
                        e.target.nextElementSibling.innerText = product.cartCount;
                        document.getElementById(`${wantedId}sub`).innerText = (product.price * 10 * product.cartCount) / 10 + '₼';
                        return product;
                    }
                }
                return product;
            })
            localStorage.setItem('myCart', JSON.stringify(newArr));
            totalUpdate();
        }
        total();
    });
}

let sendMailBtn = document.getElementById('sendMail');
sendMailBtn.addEventListener('click',sendMail);
let sendPruduct = [];
function send() {
    let arr = JSON.parse(localStorage.getItem("myCart"));
    arr.map((item) => {
        let product = `${item.name} | ${item.price}AZN | ${item.cartCount} ədəd | Məbləğ: ${(item.price * item.cartCount).toFixed(2)}AZN`
        sendPruduct.push(product);
    }) 
}
send();
function sendMail() {
    let params = {
        name: "Abbas",
        email: "abbas@gmail.com",
        message: JSON.stringify(sendPruduct)
    } 
    const serviceID = "service_u1z902p";
    const templateID = "template_iw5obnc";
    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                let FreeArr = [];
                console.log(res);
                toastr.success('Order completed');
                localStorage.setItem('myCart',JSON.stringify(FreeArr));
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                
            }
        )
        .catch(err => console.log(err))
}

let clearCard = document.getElementById('clearCard');
clearCard.addEventListener('click', function clear() {
    let FreeArr = [];
    localStorage.setItem('myCart',JSON.stringify(FreeArr));
    window.location.reload();
})

function totalUpdate() {
    if (localStorage.getItem("myCart") != null) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let totalCount = 0;
        arr.map(product => {
            totalCount = totalCount + product.cartCount * product.price;
        })
        totalprice.innerText = totalCount.toFixed(2) + '₼';
    }
}
totalUpdate();

function check() {
    if (localStorage.getItem("myCart") == '[]' || localStorage.getItem('myCart') == null) {
        cart.innerHTML = `<div class="cart_empty">
        <h2>Your cart is currently empty.</h2></div>`
    }
}
check();

function total() {
    if (localStorage.getItem("myCart") != null) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let totalCount = 0;
        arr.map(product => {
            totalCount = totalCount + product.cartCount;
        })
        productCount.innerText = totalCount;

    }
}
total();

