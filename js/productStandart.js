
// ===============================
// Tabs section
// ===============================


import getUserDataById, { isLoggedIn } from './UserFunctions.js';
import { addComment, getProduct } from './comment.js';




//=======================
// Tabs change on click
//=======================

const tabs = document.getElementById('tabs');
const tab = document.getElementById('tab');

const description = document.getElementById('desc');
const info = document.getElementById('info');
const reviews = document.getElementById('reviews');

tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs_desc')) {
        for (const btn of tabs.children) {
            btn.classList.remove('active');
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none');
        }
        description.classList.remove('d-none');
        e.target.classList.add('active');
    }
    if (e.target.classList.contains('tabs_info')) {
        for (const btn of tabs.children) {
            btn.classList.remove('active');
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none');
        }
        info.classList.remove('d-none');
        e.target.classList.add('active');
    }
    if (e.target.classList.contains('tabs_reviews')) {
        for (const btn of tabs.children) {
            btn.classList.remove('active');
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none');
        }
        reviews.classList.remove('d-none');
        e.target.classList.add('active');
    }
});


//=======================
// Fill product details
//=======================
const productId = localStorage.getItem('wantedItem');
const product = getProduct(productId);
//=========================


document.getElementById('mainImg').setAttribute('src', product.url);
document.getElementById('productName').textContent = product.name;
document.getElementById('productPrice').textContent = product.price;
document.getElementById('productDesc').textContent = product.desc;
document.getElementById('product-categories').textContent = product.category.join(', ');
document.getElementById('product-tags').textContent = product.category.join(', ');
document.getElementById('tab_desc_body').textContent = product.desc;
document.getElementById('reviewCounts').textContent = product.reviews.length;

// Displaying Rewiews
product.reviews.map(comment =>{
    let user = getUserDataById(comment.userId)
    console.log(user)

    let html = `  <div class="tab_reviews_review">
<div class="tab_reviews_review_reviewerProfile">
  <img src="${user.photo}" alt="${user.userName}" />
</div>
<div class="review">
  <p class="review_username">
    ${user.username} <span class="review_date">${comment.date}</span>
  </p>
  <p class="review_content">
   ${comment.comment}
  </p>
</div>
</div>`
    reviews.insertAdjacentHTML('beforeend', html)
})



//================================
// check if Logged in, add post section
//================================

if (isLoggedIn()) {

    let userPhoto = localStorage.getItem('photo');
    let userName = localStorage.getItem('currentUserName');


    reviews.innerHTML +=
        `<div id='create-review' class="create-review">

    <div class="create-review_reviewerProfile">
      <img  src="${userPhoto}" alt="" />
    </div>
    <div class="create-review_inputWrap">
      <input id="commentInput" type="text" class="create-review_inputWrap_input" placeholder="Comment as ${userName}">
      <button class="create-review_inputWrap_postBtn">Post</button>
    </div>
    
  </div>`;

    //================================
    // post a comment
    //================================

    const postBtn = document.getElementById('create-review');
    const commentInput = document.getElementById('commentInput');

    postBtn.addEventListener('click', () => {
        if (commentInput.value.length > 0)
            addComment(productId, commentInput.value);
        commentInput.value = '';
        document.getElementById('reviewCounts').textContent = product.reviews.length;

    });

}




