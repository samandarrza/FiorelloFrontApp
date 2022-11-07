const register_Modal = document.querySelector('.register-modal');
const register_ModalContent = document.querySelector('.register-modal_content');
const signUpBtns = document.getElementsByClassName('sign-up');


// if you want to open modal use this funcion
function modalToggle() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('sign-up') || e.target.classList.contains('register-modal')) {
            register_Modal.classList.toggle('show-modal');
            register_ModalContent.classList.toggle('show-modal_content');
        }
    });
}
modalToggle();


const registerForm = document.getElementById('registerForm');
const name_surname = document.getElementById('nameInput');
const usernameInput = document.getElementById('userInput');
const passwordInput = document.getElementById('passwordInput');
const registerBtn = document.getElementById('registerBtn');


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

    if (!checkInput(usernameInput)) {
        insertErrorMsg(usernameInput, 'This field must be filled');
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

    for (const input of registerForm) {
        input.classList.remove('input-error');
    }

    let user = new NewUser(name_surname.value, usernameInput.value, passwordInput.value);

    addNewUser(user);

});

// adding new user to database

function NewUser(fullname, username, password) {
    this.userId = username + password;
    this.fullname = fullname;
    this.username = username;
    this.password = password;
}

let tahir = new NewUser('tahir tahirli', 'tako34', '1234');

function addNewUser(user) {
    let newUser = JSON.stringify(user);
    localStorage.setItem(`${user?.userId}`, newUser);
}
addNewUser(tahir);


function getUserData(userId) {
    let result;
    let wantedUser = localStorage.getItem(`${userId}`);
    if (wantedUser !== null) {
        result = JSON.parse(wantedUser);
    }
    else{
        console.error('User Not Found');
    }
    return result;
}

console.log(getUserData('tako341234'))

import hello from './UserFunctions.js'

hello();





