const nav = document.querySelector('.nav-scroll');

window.addEventListener ('scroll',()=>{
    if(document.documentElement.scrollTop > window.innerHeight){
        nav.style.top = '0';
    }
    else{
        nav.style.top = '-15vh';
    }
})