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
const checkEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmail = email.match(regex);
    return isEmail;
};
const checkInput = (input) => {
    return input.value.trim().length > 0;
};
const insertErrorMsg = (element, message) => {
    element.setAttribute('placeholder', message);
    element.classList.add('input-error');
};

const checkForm = () => {
    let isFormValid = true;
    if (!checkInput(name_surname)) {
        insertErrorMsg(name_surname, 'This field must be filled');
        name_surname.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if (!checkEmail(email.value)) {
        insertErrorMsg(email, 'Enter a valid email');
        email.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if (!checkInput(phoneNumber)) {
        insertErrorMsg(phoneNumber, 'Enter a valid number');
        phoneNumber.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    if (!checkInput(desc)) {
        insertErrorMsg(desc, 'Message cannot be empty');
        desc.animate(inputShake, shakeTiming);
        isFormValid = false;
    }
    return isFormValid;
};



(function () {
    emailjs.init("KoykfC3B1UUSHCa5I");
})();


const send = () => {

    Email.send({
        SecureToken: "e3d920b4-592b-4635-8276-8642587ce120",
        To: 'tahirtahirli2002@gmail.com',
        From: "elmugruna@gmail.com",
        Subject: "mesaj test edirem",
        Body: "ve bu menim ilk sehifem"
    }).then(
        message => alert(message)
    );

};
// ===================================================
// Form for expanded mails (name, email, phone, desc)
// ===================================================
const form = document.getElementById('mailForm');
const sendMailBtn = document.getElementById('sendMailBtn');
const name_surname = document.getElementById('nameUser');
const email = document.getElementById('emailUser');
const phoneNumber = document.getElementById('phoneUser');
const desc = document.getElementById('descUser');






//============================================================
// Sending Email 
//============================================================

{/* <script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"> </script>  */}
// cdn link for  email.js






sendMailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!checkForm()) return;
    for (const input of form.children) {
        input.classList.remove('input-error');
    }


    var templateParams = {
        name: 'tahirli tahir',
        to_name: name_surname.value,
        message: `${desc.value} \n ${email.value} \n ${phoneNumber.value}`
    };

    emailjs.send('service_da4oq1d', 'template_v3hcg84', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            toastr.success('Email Sent')
            
        }, function (error) {
            console.log('FAILED...', error);
        })
        .then(() => {
            name_surname.value = '';
            email.value = '';
            phoneNumber.value = '';
            desc.value = '';
        });
});
