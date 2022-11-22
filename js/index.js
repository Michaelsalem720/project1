let registerButton=document.querySelector('#register');
let signUpButton=document.querySelector('#signUp');
let logInButton=document.querySelector('#logIn');
signUpButton.addEventListener('click',processInput);
signUpButton.addEventListener("click",returnToHomePage);
logInButton.addEventListener("click",returnToHomePage);
registerButton.addEventListener('click',goToSignUp);

