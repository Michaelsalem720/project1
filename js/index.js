let registerButton=document.querySelector('#register');
let logInButton = document.querySelector('.logIn');
registerButton.addEventListener("click",goToSignUp);
logInButton.addEventListener('click', logInValidation);

// function returnToHomePage(){
//     window.location.href='/project1/index.html';
// }

function goToSignUp(){
    window.location.href='/project1/html/signUp.html';
}

function logInValidation() {
    let usernameText = document.querySelector('#username').value;
    let passwordText = document.querySelector('#password').value;
    if (JSON.parse(localStorage.getItem(usernameText)) !== null) {
        let userInfo = JSON.parse(localStorage.getItem(usernameText));
        let username = userInfo['username'].value;
        let password = userInfo['password'].value;
        if (passwordText == password && usernameText == username); {
            window.location.href = '/project1/html/gameDirectory.html';
        }
    } else {
        alert('User name and/or password are incorrect!')
    }
}
