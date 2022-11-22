let registerButton=document.querySelector('#register');
let signUpButton=document.querySelector('#signUp');
let logInButton=document.querySelector('#logIn');
signUpButton.addEventListener('click',processInput);
signUpButton.addEventListener("click",returnToHomePage);
logInButton.addEventListener("click",returnToHomePage);
registerButton.addEventListener('click',goToSignUp);

let usernames=[
    {
        username:'admin',
        password:'admin',
        name:'admin',
        email:'admin@gmail.com',
        gender:'male',
        age:99
    }
];

localStorage.setItem('admin',JSON.stringify(usernames));

function usersFactory(username,password,name,email,gender,age){
    let user={
    username:username,
    password:password,
    name:name,
    email:email,
    gender:gender,
    age:age
    };
    usernames.push(user);
    // let count = 1++
    localStorage.setItem(user.name,JSON.stringify(usernames[usernames.length-1]));
}

function processInput(){
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    let name=document.querySelector('#name').value;
    let email=document.querySelector('#email').value;
    let gender=document.querySelector('#gender').value;
    let age=document.querySelector('#age').value;
    usersFactory(username,password,name,email,gender,age);
}

function returnToHomePage(){
    window.location.href='../index.html';
}

function goToSignUp(){
    window.location.href='../html/signUp.html';
}



