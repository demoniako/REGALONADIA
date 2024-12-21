document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const outcomeDisplay = document.getElementById('outcome');
    const scoreDisplay = document.getElementById('score');
    let userWins = 0;

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const outcome = determineWinner(userChoice, computerChoice);

            userChoiceDisplay.textContent = `Tu elección: ${userChoice}`;
            computerChoiceDisplay.textContent = `Elección de la computadora: ${computerChoice}`;
            outcomeDisplay.textContent = `Resultado: ${outcome}`;

            if (outcome === '¡Ganaste!') {
                userWins++;
                scoreDisplay.textContent = `Victorias: ${userWins}`;
            }

            if (userWins >= 5) {
                alert('¡Felicidades! Has ganado 5 veces. Redirigiendo a la siguiente página...');
                window.location.href = 'index40.html'; // Reemplaza con la URL de tu página
            }
        });
    });

    function getComputerChoice() {
        const choices = ['piedra', 'papel', 'tijera'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Empate';
        } else if (
            (userChoice === 'piedra' && computerChoice === 'tijera') ||
            (userChoice === 'papel' && computerChoice === 'piedra') ||
            (userChoice === 'tijera' && computerChoice === 'papel')
        ) {
            return '¡Ganaste!';
        } else {
            return 'Perdiste';
        }
    }
});
