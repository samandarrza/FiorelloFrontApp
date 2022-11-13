// =====================================
// NAVBAR SCROLL REVEAL
// =====================================
const nav = document.querySelector('.nav-scroll');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > window.innerHeight)
        nav.style.top = '0';
    else
        nav.style.top = '-15vh';
});

// =====================================



// =====================================
//  NAVBAR SEARCH INPUT
// =====================================
const searchInputs = document.querySelectorAll('.nav_menu-search_input');
const searchBtn = document.querySelectorAll('.nav_menu-search_btn');
const menus = document.getElementsByClassName('menu-holder');

searchBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {

        let input = e.target.parentElement.parentElement.children[0];

        let searchValue = input.value.trim();
        if (searchValue.length < !0) {
            input.classList.toggle('searching');
            if(input.classList.contains('searching'))
                input.focus();
            input.parentElement.classList.toggle('border');
            for (const menu of menus) {
                menu.classList.toggle('d-none');
            }
        }
        else {
            localStorage.setItem('searchValue', input.value.trim().toLowerCase());
            input.value = '';
            window.location.href = 'search.html';
        }


    });
});

searchInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            if (input.value.length > 0) {
                
                localStorage.setItem('searchValue', input.value.trim().toLowerCase());
                input.value = '';
                window.location.href = 'search.html';
            }
            else{
                for (const menu of menus) {
                    menu.classList.toggle('d-none');
                }
                e.target.parentElement.classList.toggle('border')
                input.classList.toggle('searching');
                input.blur();
            }


        }
    });
});




// =====================================
//  NAVBAR MOBILE 
// =====================================
const homeMenu = document.querySelector('.navMobile_home');
const icons = document.getElementsByClassName('navMobile_box_menu');
const homeIcon = document.getElementById('homeIcon');
const indicator = document.querySelector('.indicator');
const activeElement = document.querySelector('li.active');

indicator.style.left = `${activeElement.getBoundingClientRect().left - ((indicator.offsetWidth / 2) - (activeElement.offsetWidth / 2))}px`;

for (const icon of icons) {
    icon.addEventListener('click', () => {
        for (const item of icons) {
            item.classList.remove('active');
        }
        indicator.style.left = `${icon.getBoundingClientRect().left - ((indicator.offsetWidth / 2) - (icon.offsetWidth / 2))}px`;

        icon.classList.toggle('active');
        if (icon.classList.contains('homeIcon')) {
            homeMenu.classList.toggle('active');
        }
        else
            homeMenu.classList.remove('active');

    });
}

// =====================================
//  NAVBAR MOBILE PAGES
// =====================================

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('homeIcon')) {

        homeMenu.classList.toggle('active');
    }
});

const menuBtns = document.getElementsByClassName('navMobile_menu_btn');
const subMenus = document.getElementsByClassName('submenu');

for (const menu of menuBtns) {
    menu.addEventListener('click', () => {
        menu.nextElementSibling?.classList.toggle('active');
    });
}



