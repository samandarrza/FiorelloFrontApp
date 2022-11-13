// ====================================================
// Writing dummy data to html
// ====================================================
const container = document.querySelector('.column');

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('category')) {
        let id = e.target.getAttribute('id');
        getData(id);
    }
});

const getData = (category) => {
    fetch('./js/dummy.json').then(res => res.json())
        .then(data => {

            const filteredData = data?.filter(product => {
                if (category === 'ALL')
                    return true;
                return product.category.includes(category);
            });



            container.innerHTML = '';
            filteredData?.map(product => {

                let status = 'New';
                if (product.count <= 0)
                    status = "Sold";

                container.innerHTML += ` 
                <div id="${product.id}" class="column_card">
                <div class="column_status ${status}">${status}</div>
                <a class="column_info">
                <p class="column_name">${product.name}</p>
                <p class="column_price">${product.price}₼</p>
                <button class="cart_btn small">Add to cart</button>
            </a>
            <img src="${product.url}" width="100%" alt="" />
            </div>`;
            });

        })

        .then(() => {
            const cardlinks = document.getElementsByClassName('cards_card_info');
            for (const link of cardlinks) {
                link.addEventListener('click',()=>{
                    let productId =link.parentElement.getAttribute('id');
                    localStorage.setItem('wantedItem',productId);
                })
            }
        });
};

getData('ALL');