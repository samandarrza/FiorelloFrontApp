
let counters = document.getElementsByClassName('cart-item-count');
function total() {
    if (localStorage.getItem("myCart") != null) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let totalCount = 0;
        arr.map(product => {
            totalCount += product.cartCount;
        })
        for (const counter of counters) {
            counter.textContent = totalCount;
        }

    }
}
total();