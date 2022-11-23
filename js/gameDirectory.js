let backgammonFrame = document.querySelector('#backgammon');
let matchingGameFrame = document.querySelector('#matchingGame');
backgammonFrame.addEventListener('click', directToBackgammon);
matchingGameFrame.addEventListener('click', directToMatchingGame);

function directToBackgammon() {
    window.location.href = '/project1/html/backgammon.html';
}

function directToMatchingGame() {
    window.location.href = '/project1/html/matchingGame.html';
}