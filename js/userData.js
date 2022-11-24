let signUpButton = document.querySelector('#signUp');
let logInButton = document.querySelector('.logIn');
signUpButton.addEventListener('click', processInput);
logInButton.addEventListener("click", returnToHomePage);

let admin =
{
    username: 'admin',
    password: 'admin',
    name: 'admin',
    email: 'admin@gmail.com',
    gender: 'male',
    age: 99
}
    ;

localStorage.setItem('admin', JSON.stringify(admin));

function usersFactory(username, password,passwordCheck, name, email, gender, age) {
    let user = {
        username: username,
        password: password,
        passwordCheck: passwordCheck,
        name: name,
        email: email,
        gender: gender,
        age: age,
        scoreMemoryGame: 100,
        scoreBackgammon:0
    };
    if (signUpValidation(user)) {
        localStorage.setItem(user.username, JSON.stringify(user));
        alert('Registered successfully!\nWelcome to our website!');
        returnToHomePage();
    } else {
        alert('Invalid data. Please try again');
    }
}

function processInput() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let passwordCheck = document.querySelector('#passwordCheck').value;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let gender = document.querySelector('#gender').value;
    let age = document.querySelector('#age').value;
    usersFactory(username, password,passwordCheck, name, email, gender, age);
}

function signUpValidation(userObject) {
    let checker = true;
    checker *= /[a-z]+\w*$/i.test(userObject.username);
    checker *= /.{8,16}/.test(userObject.password);
    checker *= /[a-z\s]{2,16}/.test(userObject.name);
    checker *= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userObject.email);
    checker *= /(male)|(female)/.test(userObject.gender);
    if (userObject.age >= 0 && userObject.age <= 120 && userObject.age != undefined) {
        checker *= true;
    } else checker *= false;
    if (userObject.password === userObject.passwordCheck) {
        checker *= true;
    } else checker *= false;
    if (localStorage.getItem(userObject.username) === null) {
        checker *= true;
    } else checker *= false;
    return checker;
}

function returnToHomePage() {
    window.location.href = '../index.html';
}

