import { getUserDataById, getUserDataByName, addNewUser, User, isUserExists, getUsers, register, login, isLoggedIn, logOut } from './UserFunctions.js';




const modal = document.querySelector('.register-modal');
const modalContent = document.querySelector('.register-modal_content');
const login_ModalContent = document.querySelector('.login_modal');
const signUp_ModalContent = document.querySelector('.signUp_modal');

// buttons in navbar
const signUpBtns = document.getElementsByClassName('sign-up');
const logOutBtns = document.getElementsByClassName('log-out');

// links in modal bottom( login, signup)
const modalLinks = document.getElementsByClassName('login-link');
const profileModal = document.querySelector('.profileModal');

// register details
const registerForm = document.getElementById('registerForm');
const name_surname = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const usernameInput = document.getElementById('userInput');
const passwordInput = document.getElementById('passwordInput');
const registerBtn = document.getElementById('registerBtn');

const usernameLogin = document.getElementById('userLogin');
const passwordLogin = document.getElementById('passwordLogin');
const loginBtn = document.getElementById('loginBtn');


// user Info
const currentUserNames = document.getElementsByClassName('userName');
const currentFullNames = document.getElementsByClassName('fullName');
const currentPhoneNums = document.getElementsByClassName('phoneNumber');
const currentEmails = document.getElementsByClassName('email');
const currentPhotos = document.getElementsByClassName('userPhoto');



// if you want to open modal use this funcion
function modalToggle() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('sign-up') || e.target.classList.contains('profile') || e.target.classList.contains('register-modal')) {
            modal.classList.toggle('show-modal');
            modalContent.classList.toggle('show-modal_content');
        }
    });
}
modalToggle();



// checking if user is logged in 

if (isLoggedIn()) {
    for (const signUp of signUpBtns) {
        signUp.classList.add('d-none');
    }
    for (const logOut of logOutBtns) {
        logOut.classList.remove('d-none');
    }
    signUp_ModalContent.classList.add('d-none');
    login_ModalContent.classList.add('d-none');
    profileModal.classList.remove('d-none');


    // filling user details 
    let photoLink = sessionStorage.getItem('photo');
    if(photoLink == undefined)
        photoLink = 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg';
    for (const item of currentUserNames) {
        item.textContent = sessionStorage.getItem('currentUserName')
    }
    for (const item of currentFullNames) {
        item.textContent = sessionStorage.getItem('fullName')
    }
    for (const item of currentPhoneNums) {
        item.textContent = sessionStorage.getItem('phoneNum')
    }
    for (const item of currentEmails) {
        item.textContent = sessionStorage.getItem('email')
    }
    for (const item of currentPhotos) {
        item.setAttribute('src',photoLink)
    }


}
else{
    login_ModalContent.classList.remove('d-none');
    signUp_ModalContent.classList.add('d-none');
    profileModal.classList.add('d-none');
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
const checkEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmail = email.match(regex);
    return isEmail;
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
    if (!checkEmail(emailInput.value)) {
        insertErrorMsg(emailInput, 'Enter a valid Email');
        emailInput.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if (!checkInput(phoneInput)) {
        insertErrorMsg(phoneInput, 'This field must be filled');
        phoneInput.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if ( isUserExists(usernameInput.value)) {
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
const checkLogin = () =>{
    let isFormValid = true
    if (!isUserExists(usernameLogin.value)) {
        insertErrorMsg(usernameLogin, 'Username exists');
        usernameLogin.animate(inputShake, shakeTiming);
        isFormValid = false;    
    }
    if (!checkInput(passwordLogin)) {
        insertErrorMsg(passwordLogin, 'This field must be filled');
        passwordLogin.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    return isFormValid
}



// Getting user Photo 
let photoLink;
const userPhotos = document.getElementsByClassName('userPhoto');
const addPhotoBtn = document.getElementById('addProfilePic');
const addPicHidden = document.getElementById('addPicHidden');

addPhotoBtn.addEventListener('click', () => {

    addPicHidden.addEventListener('change', () => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
             photoLink = fileReader.result;
            for (const photo of userPhotos) {
                photo.setAttribute('src',photoLink);
            }
            
        };
        fileReader.readAsDataURL(addPicHidden.files[0]);
    });

    addPicHidden.click();

});





registerBtn.addEventListener('click', (e) => {
    if (!checkNewUser())
        return;
    // remove errors
    for (const input of registerForm) {
        input.classList.remove('input-error');
    }
    // add user
    let registered = register(name_surname.value, emailInput.value, phoneInput.value, usernameInput.value, passwordInput.value, photoLink);
    if (!registered) {
        console.error('User Exists');
        return;
    }
    if( !login(usernameInput.value, passwordInput.value)){
        console.log('logged error')
    }

    modal.classList.toggle('show-modal');
    modalContent.classList.toggle('show-modal_content');

    setTimeout(() => {
        window.location.reload();
    }, 0);

});



loginBtn.addEventListener('click', () => {
    if(!checkLogin())
    return
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






