document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const resetButton = document.getElementById('reset-button');
    const symbols = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝'];
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;

    function initializeGame() {
        cards = [...symbols, ...symbols];
        cards.sort(() => 0.5 - Math.random());
        gameBoard.innerHTML = '';
        matchedPairs = 0;

        cards.forEach(symbol => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            this.textContent = this.dataset.symbol;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.symbol === card2.dataset.symbol) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;

            if (matchedPairs === symbols.length) {
                setTimeout(() => {
                    alert('¡Felicidades! Has encontrado todas las parejas.');
                    window.location.href = 'index41.html';
                }, 500);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }

        flippedCards = [];
    }

    resetButton.addEventListener('click', initializeGame);

    initializeGame();
});
