document.body.addEventListener('click', (e) => {
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