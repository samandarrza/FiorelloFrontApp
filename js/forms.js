
// ===================================================
// Form for expanded mails (name, email, phone, desc)
// ===================================================

// Status :: gets values from inputs and logs them . checks email format


const sendMailBtn = document.getElementById('sendMailBtn');
const name_surname = document.getElementById('nameInput');
const email = document.getElementById('emailInput');
const phoneNumber = document.getElementById('phoneInput');
const desc = document.getElementById('descInput');

sendMailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(checkEmail(email.value))
    console.log(name_surname.value , email.value, phoneNumber.value, desc.value)

});

const checkEmail = (email)=>{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmail = email.match(regex);
    if(isEmail)
        return true;
    return false;
}