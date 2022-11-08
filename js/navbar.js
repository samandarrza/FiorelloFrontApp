// =====================================
// NAVBAR SCROLL REVEAL
// =====================================
const nav = document.querySelector('.nav-scroll');
window.addEventListener ('scroll',()=>{
    if(document.documentElement.scrollTop > window.innerHeight)
        nav.style.top = '0';
    else
        nav.style.top = '-15vh';
})

// =====================================



// =====================================
//  NAVBAR SEARCH INPUT
// =====================================
const searchInputs = document.getElementsByClassName('nav_menu-search_input');
const searchBtn = document.querySelectorAll('.nav_menu-search_btn');
const menus = document.getElementsByClassName('menu-holder');

searchBtn.forEach(btn=>{
btn.addEventListener('click',(e)=>{

    let input = e.target.parentElement.parentElement.children[0];
    let searchValue = input.value.trim();
    if(searchValue.length <! 0){
        input.classList.toggle('searching');
        input.parentElement.classList.toggle('border');
        for (const menu of menus) {
                menu.classList.toggle('d-none')
        }
    }
        else{
            // search for the value
        }
    
       
    })
})
