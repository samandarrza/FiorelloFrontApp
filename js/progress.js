let onenumber = document.getElementById('progress_one_number');

let count1 = 0;
setInterval(()=>{
    if (count1 == 95) {
        clearInterval();
    }
    else{
        count1++;
        onenumber.innerHTML = count1 + '%';
    }
},20)


let twonumber = document.getElementById('progress_two_number');
let count2 = 0;
setInterval(()=>{
    if (count2 == 98) {
        clearInterval();
    }
    else{
        count2++;
        twonumber.innerHTML = count2 + '%';
    }
},20)

let threenumber = document.getElementById('progress_three_number');
let count3 = 0;
setInterval(()=>{
    if (count3 == 99) {
        clearInterval();
    }
    else{
        count3++;
        threenumber.innerHTML = count3 + '%';
    }
},20)

let fournumber = document.getElementById('progress_four_number');
let count4 = 0;
setInterval(()=>{
    if (count4 == 96) {
        clearInterval();
    }
    else{
        count4++;
        fournumber.innerHTML = count4 + '%';
    }
},20)