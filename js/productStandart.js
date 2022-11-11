
// ===============================
// Tabs section
// ===============================


import {isLoggedIn}from './UserFunctions.js'


//=======================
// Tabs change on click
//=======================

const tabs =  document.getElementById('tabs')
const tab =  document.getElementById('tab')

const description = document.getElementById('desc')
const info = document.getElementById('info')
const reviews = document.getElementById('reviews')

tabs.addEventListener('click',(e)=>{
    if(e.target.classList.contains('tabs_desc')){
        for (const btn of tabs.children) {
            btn.classList.remove('active')
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none')
        }
        description.classList.remove('d-none');
        e.target.classList.add('active')
    }
    if(e.target.classList.contains('tabs_info')){
        for (const btn of tabs.children) {
            btn.classList.remove('active')
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none')
        }
        info.classList.remove('d-none');
        e.target.classList.add('active')
    }
    if(e.target.classList.contains('tabs_reviews')){
        for (const btn of tabs.children) {
            btn.classList.remove('active')
        }
        for (const btn of tab.children) {
            btn.classList.add('d-none')
        }
        reviews.classList.remove('d-none');
        e.target.classList.add('active')
    }
})


//================================
// check if Logged in, add post section
//================================

if(isLoggedIn()){
    console.log('daxil oldun');

    let userPhoto = sessionStorage.getItem('photo');
    let userName = sessionStorage.getItem('currentUserName');


    reviews.innerHTML += 
    `<div id='create-review' class="create-review">

    <div class="create-review_reviewerProfile">
      <img  src="${userPhoto}" alt="" />
    </div>
    <div class="create-review_inputWrap">
      <input type="text" class="create-review_inputWrap_input" placeholder="Comment as ${userName}">
      <button class="create-review_inputWrap_postBtn">Post</button>
    </div>
    
  </div>`

}


