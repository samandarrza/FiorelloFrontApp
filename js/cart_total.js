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