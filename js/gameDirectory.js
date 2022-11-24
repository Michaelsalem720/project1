let logOutButton = document.querySelector('#logOut');
logOutButton.addEventListener('click', returnToHomePage);
logOutButton.addEventListener('click', logOut);

document.querySelector('p').textContent = `Hey ${JSON.parse(sessionStorage.getItem('currentUser')).name}! Choose a game you'd like to try out!`;

function logOut() {
    sessionStorage.clear();
}

function returnToHomePage(){
    window.location.href='../index.html';
}