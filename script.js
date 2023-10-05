let firstNameForm = document.querySelector('#firstName');
let lastNameForm = document.querySelector('#lastName');
let emailForm = document.querySelector('#email');
let passwordForm = document.querySelector('#password');

let submitBtn = document.querySelector('.form-button');

let errorTextFirstName = document.querySelector('#errorTextFirstName');
let errorTextLastName = document.querySelector('#errorTextLastName');
let errorTextEmail = document.querySelector('#errorTextEmail');
let errorTextPassword = document.querySelector('#errorTextPassword');

let errorIconFirstName = document.querySelector('#errorIconFirstName');
let errorIconLastName = document.querySelector('#errorIconLastName');
let errorIconEmail = document.querySelector('#errorIconEmail');
let errorIconPassword = document.querySelector('#errorIconPassword');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = firstNameForm.value;
    let lastName = lastNameForm.value;
    let email = emailForm.value;
    let password = passwordForm.value;

    if (firstName === '') {
        firstNameForm.style.border = '1px solid hsl(0, 100%, 74%)';
        errorTextFirstName.classList.add('triggered');
        errorIconFirstName.classList.add('triggered');
    }
    if (lastName === '') {
        lastNameForm.style.border = '1px solid hsl(0, 100%, 74%)';
        errorTextLastName.classList.add('triggered');
        errorIconLastName.classList.add('triggered');
    }
    if (!(email.includes('@')) || email === '') {
        emailForm.style.border = '1px solid hsl(0, 100%, 74%)';
        errorTextEmail.classList.add('triggered');
        errorIconEmail.classList.add('triggered');
    }
    if (password === '') {
        passwordForm.style.border = '1px solid hsl(0, 100%, 74%)';
        errorTextPassword.classList.add('triggered');
        errorIconPassword.classList.add('triggered');
    }
});

firstNameForm.addEventListener('input', () => {
    firstNameForm.style.border = '1px solid hsl(246, 25%, 77%)';
    errorTextFirstName.classList.remove('triggered');
    errorIconFirstName.classList.remove('triggered');
});
lastNameForm.addEventListener('input', () => {
    lastNameForm.style.border = '1px solid hsl(246, 25%, 77%)';
    errorTextLastName.classList.remove('triggered');
    errorIconLastName.classList.remove('triggered');
});
emailForm.addEventListener('input', () => {
    emailForm.style.border = '1px solid hsl(246, 25%, 77%)';
    errorTextEmail.classList.remove('triggered');
    errorIconEmail.classList.remove('triggered');
});
passwordForm.addEventListener('input', () => {
    passwordForm.style.border = '1px solid hsl(246, 25%, 77%)';
    errorTextPassword.classList.remove('triggered');
    errorIconPassword.classList.remove('triggered');
});