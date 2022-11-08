import { getUserDataById, getUserDataByName, addNewUser, User, isUserExists, getUsers, register, login, isLoggedIn, logOut } from './UserFunctions.js';




const modal = document.querySelector('.register-modal');
const modalContent = document.querySelector('.register-modal_content');
const login_ModalContent = document.querySelector('.login_modal');
const signUp_ModalContent = document.querySelector('.signUp_modal');
const signUpBtns = document.getElementsByClassName('sign-up');
const logOutBtns = document.getElementsByClassName('log-out');
const modalLinks = document.getElementsByClassName('login-link');

const registerForm = document.getElementById('registerForm');
const name_surname = document.getElementById('nameInput');
const usernameInput = document.getElementById('userInput');
const passwordInput = document.getElementById('passwordInput');
const usernameLogin = document.getElementById('userLogin');
const passwordLogin = document.getElementById('passwordLogin');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');



// if you want to open modal use this funcion
function modalToggle() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('sign-up') || e.target.classList.contains('register-modal')) {
            modal.classList.toggle('show-modal');
            modalContent.classList.toggle('show-modal_content');
        }
    });
}
modalToggle();





if (isLoggedIn()) {
    for (const signUp of signUpBtns) {
        signUp.classList.add('d-none');
    }
    for (const logOut of logOutBtns) {
        logOut.classList.remove('d-none');
    }
}

const inputShake = [
    { transform: 'translateX(0)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(0)' },

];
const shakeTiming = {
    duration: 300,
    iterations: 1,
};
const checkInput = (input) => {
    return input.value.trim().length > 0;
};
const insertErrorMsg = (element, message) => {
    element.setAttribute('placeholder', message);
    element.classList.add('input-error');
};
const checkNewUser = () => {
    let isFormValid = true;
    if (!checkInput(name_surname)) {
        insertErrorMsg(name_surname, 'This field must be filled');
        name_surname.animate(inputShake, shakeTiming);
        isFormValid = false;
    }

    if (isUserExists(usernameInput.value)) {
        insertErrorMsg(usernameInput, 'Username exists');
        usernameInput.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if (!checkInput(passwordInput)) {
        insertErrorMsg(passwordInput, 'This field must be filled');
        passwordInput.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    return isFormValid;
};

registerBtn.addEventListener('click', (e) => {
    if (!checkNewUser())
        return;
    // remove errors
    for (const input of registerForm) {
        input.classList.remove('input-error');
    }
    // add user
    let registered = register(name_surname.value, usernameInput.value, passwordInput.value);
    if (!registered) {
        console.error('User Exists');
        return;
    }
    login(usernameInput.value, passwordInput.value);

    modal.classList.toggle('show-modal');
    modalContent.classList.toggle('show-modal_content');

    setTimeout(() => {
        window.location.reload();
    }, 0);

});



loginBtn.addEventListener('click', () => {
    console.log(usernameLogin.value, passwordLogin.value);
    login(usernameLogin.value, passwordLogin.value);

    setTimeout(() => {
        window.location.reload();
    }, 0);
});

for (const loginLink of modalLinks) {
    loginLink.addEventListener('click', () => {
        login_ModalContent.classList.toggle('d-none');
        signUp_ModalContent.classList.toggle('d-none');

    });
}

for (const logoutBtn of logOutBtns) {
    logoutBtn.addEventListener('click', () => {
        logOut();
        setTimeout(() => {
            window.location.reload();
        }, 0);
    });
}






