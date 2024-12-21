// script.js
const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game-area');
let score = 0;

// Mover el círculo a una posición aleatoria
function moveCircle() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const x = Math.random() * (gameAreaRect.width - 50);
    const y = Math.random() * (gameAreaRect.height - 50);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// Incrementar la puntuación al hacer clic
circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    if (score >= 50) {
        window.location.href = 'index33.html'; // Redirige a la siguiente página
    } else {
        moveCircle();
    }
});

// Iniciar el juego
moveCircle();
