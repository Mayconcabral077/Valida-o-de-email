const email = document.querySelector('#email')
const errorTxt = document.querySelector('.msg-erro-email')
const btn = document.querySelector('button')
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


function check (e) {

    if (email.value.match(regExp)) {
        email.style.borderColor= 'hsl(223, 100%, 88%)'
        errorTxt.style.display='none'
        btn.style.display='block'
    } 
    
    else  {
        email.style.borderColor= 'red'
        errorTxt.style.display='flex'
        btn.style.display='none'
    }

    if (email.value== ""){
        email.style.borderColor= 'lightgrey'
        errorTxt.style.display='none'
        btn.style.display='none'
    }
}

check()