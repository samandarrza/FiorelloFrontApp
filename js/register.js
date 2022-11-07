const register_Modal = document.querySelector('.register-modal');
const register_ModalContent = document.querySelector('.register-modal_content');
const registerBtns = document.getElementsByClassName('sign-in');

document.body.addEventListener('click',(e)=>{


    if(e.target.classList.contains('sign-in')|| e.target.classList.contains('register-modal') ){
        console.log('calisdi');
        register_Modal.classList.toggle('show-modal');
        register_ModalContent.classList.toggle('show-modal_content');

    }
})