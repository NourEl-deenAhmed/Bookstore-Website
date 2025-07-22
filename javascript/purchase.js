const myForm = document.querySelector('#formy');
const myName = document.querySelector('#name');
const myAddress = document.querySelector('#address');
const myPhone = document.querySelector('#phone-number');
const myCard = document.querySelector('#card-number');
const theForm = document.querySelector('.hide');
const addToCard = document.querySelector('#add');
const message = document.querySelector('.hidden-msg');
const bookTitle = document.querySelector('.book-title');


addToCard.addEventListener('click', showForm)
function showForm () {
    theForm.classList.remove('hide');
    theForm.classList.add('the-form');
}


myForm.addEventListener('submit',onBuy);
function onBuy (e) {
    e.preventDefault();
    if(myName.value == '' || myAddress.value == '' || 
        myPhone.value == '' || myCard.value =='')
        {
            message.innerHTML = 'Please Fill All Fields';
            message.classList.remove('hidden-msg');
            message.classList.add('show-msg');
            setTimeout(()=> message.classList.add('hidden-msg'),3000);
        }
        else {
            message.innerHTML = 'Thank you ' + myName.value + '! Your order for ' + bookTitle.textContent + 'has been placed.'
            message.classList.remove('hidden-msg');
            message.classList.add('show-msg');
            myName.value = '';
            myAddress.value = '';
            myPhone.value = '';
            myCard.value = '';
        }
}
