
//==========================
// COPY these to use 
//==========================

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






//======================================================
// Subscribe orange
//======================================================

const subscribeOrange = document.querySelector('button.subscribe_orange');


subscribeOrange.addEventListener('click', (e) => {

    let email = e.target.previousElementSibling;


    if (!checkEmail(email.value)) {
        insertErrorMsg(email, 'Enter valid mail');
        email.classList.add('input-error');
        e.target.animate(inputShake, shakeTiming);
        email.animate(inputShake, shakeTiming);
        return;
    }

    for (const input of e.target.parentElement.children) {
        input.classList.remove('input-error');
    }

    var templateParams = {
        name: 'tahirli tahir',
        message: `${email.value}  Subscribed `
    };

    emailjs.send('service_da4oq1d', 'template_v3hcg84', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            toastr.success('Email Sent');
        }, function (error) {
            console.log('FAILED...', error);
        })
        .then(() => {
            email.value = '';
        });

});




// ====================================================
// Writing dummy data to html
// ====================================================
const container = document.querySelector('.gridHome_products');

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('category')) {
        let id = e.target.getAttribute('id');
        getData(id);
    }
});

const getData = (category) => {
    fetch('./js/dummy.json').then(res => res.json())
        .then(data => {

            const filteredData = data?.filter(product => {
                if (category === 'ALL')
                    return true;
                return product.category.includes(category);
            });



            container.innerHTML = '';
            filteredData?.map(product => {

                let status = 'New';
                if (product.count <= 0)
                    status = "Sold";

                container.innerHTML += `  <div id="${product.id}" class="cards_card">
        <div class="cards_card_status ${status}">${status}</div>
        <a href ="standartProduct.html" target="_blank" class="cards_card_info">
          <p class="flower-name">${product.name}</p>
          <p class="flower-price">${product.price}</p>
          </a>
          <div>
          <button class="addCart-btn cart_btn">Add to cart</button>
          </div>
        <img src="${product.url}" width="100%" alt="" />
        </div>`;
            });

        })

        .then(() => {
            const cardlinks = document.getElementsByClassName('cards_card_info');
            for (const link of cardlinks) {
                link.addEventListener('click', () => {
                    let productId = link.parentElement.getAttribute('id');
                    localStorage.setItem('wantedItem', productId);
                });
            }

            let addToCart_btns = document.getElementsByClassName('addCart-btn');

            for (const btn of addToCart_btns) {
                btn.addEventListener('click', () => {
                    //add to cart here 
                });
            }
        });
};

getData('ALL');

// ====================================================
// Add to cart btn
// ====================================================



