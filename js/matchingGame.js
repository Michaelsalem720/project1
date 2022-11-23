let gameBoard = document.querySelector('#gameBoard');
gameBoard.addEventListener('click', flipCard);

function flipCard(event) {
    let card = event.target;
    if (card.tagName === 'IMG') {
        card.parentElement.style.display = 'none';
        card.parentElement.previousElementSibling.style.display = 'inline-block';
    }
}

