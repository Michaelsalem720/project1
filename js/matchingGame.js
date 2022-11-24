let gameBoard = document.querySelector('#gameBoard');
let scoreElement = document.querySelector('#score');
let flippedCount = 0;
gameBoard.addEventListener('click', flipCard);

function flipCard(event) {
    let card = event.target;
    if (card.tagName === 'IMG') {
        card.parentElement.style.display = 'none';
        card.parentElement.previousElementSibling.style.display = 'inline-block';
        card.parentElement.previousElementSibling.classList.add('flipped');
        flippedCount++;
    } if (flippedCount == 2) {
        flippedCount = 0;
        isMatch();
    }
}

function isMatch() {
    let flippedCard = document.querySelectorAll('.flipped');
    if (flippedCard[0].textContent === flippedCard[1].textContent) {
        flippedCard[0].classList.remove('flipped');
        flippedCard[1].classList.remove('flipped');
        flippedCard[0].remove();
        flippedCard[1].remove();
        updateScore();
    } else {
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
    card1.classList.remove('flipped');

}

function updateScore() {
    let score = parseInt(scoreElement.textContent);
    scoreElement.innerHTML = score + 1;
}
