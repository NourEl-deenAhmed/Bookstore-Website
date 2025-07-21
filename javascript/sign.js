const email = document.querySelector('#em');
const password = document.querySelector('#pass');
const myform = document.querySelector('#my-form');
const msg = document.querySelector('.hidden');


myform.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();
    if(email.value == '' || password.value == '')
    {
        msg.classList.add('empty-field');
        msg.classList.remove('hidden');
        setTimeout(()=>msg.classList.remove('empty-field'), 3000);
        setTimeout(()=>msg.classList.add('hidden'), 3000);
    }
    else
    {
        window.alert('Welcome Back, '+ email.value +'!');
        email.value ='';
        password.value ='';
    }
}

