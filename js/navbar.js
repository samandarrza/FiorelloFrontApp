const nav = document.querySelector('.nav-scroll');

window.addEventListener ('scroll',()=>{
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > window.innerHeight){
        console.log('calis')
        nav.style.top = '0';
    }
    else{
        nav.style.top = '-15vh';
    }
})