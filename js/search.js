const container = document.querySelector('.gridHome_products');
const searchValue = localStorage.getItem('searchValue');
const cardlinks = document.getElementsByClassName('cards_card_info');
const error = document.getElementById('error-msg')

for (const link of cardlinks) {
    link.addEventListener('click',()=>{
        let productId =link.parentElement.getAttribute('id');
        localStorage.setItem('wantedItem',productId);
    })
}
 const search = (input)=>{
    inputWords = input.split(' ').join('|');

    let regex = new RegExp(`${inputWords}`,'gmi') 
  let products = JSON.parse(localStorage.getItem('products'));

   let filetedData = products.filter(product => {
    
   if(product.name.match(regex))
   return true;
   if(product.desc.match(regex))
   return true;
    
  })
  if(filetedData.length <= 0)
  error.style.display = 'block'


  filetedData.map(product=>{
    let status = 'New';
    if (product.count <= 0)
        status = "Sold";
    
  container.innerHTML += `  <div id="${product.id}" class="cards_card">
        <div class="cards_card_status ${status}">${status}</div>
        <a href ="standartProduct.html" target="_blank" class="cards_card_info">
          <p class="flower-name">${product.name}</p>
          <p class="flower-price">${product.price}</p>
          <button class="addCart-btn">Add to cart</button>
        </a>
        <img src="${product.url}" width="100%" alt="" />
        </div>`;
  })




}

setTimeout(() => {
    search(searchValue);
}, 0);


