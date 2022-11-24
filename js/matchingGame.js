let gameBoard = document.querySelector('#gameBoard');
let scoreElement = document.querySelector('#score');
let restartButton = document.querySelector('#restart');
let body = document.querySelector('body');
let flippedCount = 0;
let emojisArr = ['🤬', '🤬', '😱', '😱', '🥳', '🥳', '🥸', '🥸', '🥵', '🥵', '🥶', '🥶', '🤣', '🤣', '😀', '😀'];

gameBoard.addEventListener('click', flipCard);
body.addEventListener('load', shuffleCards());
restartButton.addEventListener('click', () => {
    window.location.reload();
});

function shuffleCards() {
    let frontCollection = document.querySelectorAll('.cardFront');
    for (i = 0; i < frontCollection.length; i++){
        let randomIndex = Math.floor(Math.random() * emojisArr.length);
        frontCollection[i].textContent = emojisArr[randomIndex];
        emojisArr.splice(randomIndex, 1);
    }location.reload
}

function flipCard(event) {
    let card = event.target;
    if (card.tagName === 'IMG') {
        card.parentElement.style.display = 'none';
        card.parentElement.previousElementSibling.style.display = 'inline-block';
        card.parentElement.previousElementSibling.classList.add('flipped');
        flippedCount++;
    } if (flippedCount == 2) {
        flippedCount = 0;
        setTimeout(isMatch,400);
    }
}

function isMatch() {
    let flippedCard = document.querySelectorAll('.flipped');
    if (flippedCard[0].textContent === flippedCard[1].textContent) {
        flippedCard[0].classList.remove('flipped');
        flippedCard[1].classList.remove('flipped');
        flippedCard[0].remove();
        flippedCard[1].remove();
        updateScore1();
    } else {
        updateScore2();
        setTimeout(function () {
            flipBack(flippedCard[0], flippedCard[1]);
        }, 400);
    }
}

function flipBack(card1,card2) {
    card1.style.display = 'none';
    card2.style.display = 'none';
    card1.nextElementSibling.style.display = 'inline-block';
    card2.nextElementSibling.style.display = 'inline-block';
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');

}

function updateScore1() {
    let score = parseInt(scoreElement.textContent);
    scoreElement.innerHTML = score + 2;
}

function updateScore2() {
    let score = parseInt(scoreElement.textContent);
    scoreElement.innerHTML = score - 1;
}
