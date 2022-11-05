
// ===================================================
// Form for expanded mails (name, email, phone, desc)
// ===================================================

// Status :: gets values from inputs  . checks email format sends email

//============
//SHAKE ANIMATION
//============

const inputShake = [
    {border: '1px solid red'},
     { transform: 'translateX(0)' },
     { transform: 'translateX(5px)' },
     { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
     { transform: 'translateX(0)' },
    {border: '1px solid red'}

  ];
  
  const shakeTiming = {
    duration: 300,
    iterations: 1,
  }



const sendMailBtn = document.getElementById('sendMailBtn');
const name_surname = document.getElementById('nameInput');
const email = document.getElementById('emailInput');
const phoneNumber = document.getElementById('phoneInput');
const desc = document.getElementById('descInput');

sendMailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!checkInput(name_surname)){
        name_surname.animate(inputShake, shakeTiming)
    }
    if(!checkEmail(email.value)){
        email.animate(inputShake, shakeTiming)
    }

});

const checkEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmail = email.match(regex);
    return isEmail
};
const checkInput = (input)=>{
  return input.value.trim().length > 0 
}
const insertErrorMsg = (element, message){
    element.insertAdjacentHTML("afterend",)
}


//============================================================
// Sending Email 
//============================================================

// <script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"> </script> 
// cdn link for  email.js




(function () {
    emailjs.init("KoykfC3B1UUSHCa5I");
  })();

 function  send() {

    Email.send({
        SecureToken : "e3d920b4-592b-4635-8276-8642587ce120",
        To : 'tahirtahirli2002@gmail.com',
        From : "elmugruna@gmail.com",
        Subject : "mesaj test edirem",
        Body : "ve bu menim ilk sehifem"
    }).then(
      message => alert(message)
    );

}

 sendMailBtn.addEventListener('click', ()=>{
    var templateParams = {
        name: 'tahirli tahir',
        to_name: name_surname.value,
        message: `${desc.value} \n ${email.value} \n ${phoneNumber.value}`
    };

    emailjs.send('service_da4oq1d', 'template_v3hcg84', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
    .then(()=>{
        name_surname.value = '';
        email.value = ''
        phoneNumber.value = '';
        desc.value = ''
    });
})


