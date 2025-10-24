
// Retrieve saved score or initialize
let game = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Reset score
function resetScore() {
  game = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  document.querySelector('.js-score').innerHTML =
    'Wins: 0, Losses: 0, Ties: 0';
}

// Computer chooses random move
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Main game logic
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = 'Tie';
    game.ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win';
    game.wins++;
  } else {
    result = 'You lose';
    game.losses++;
  }

  localStorage.setItem('score', JSON.stringify(game));
  updateScoreElement(playerMove, computerMove, result);
}

// Update score display
function updateScoreElement(playerMove, computerMove, result) {
  document.querySelector('.js-score').innerHTML = `
    You: <strong>${playerMove}</strong> - Computer: <strong>${computerMove}</strong>.<br><br>
    <strong>${result}</strong>.<br><br>
    Wins: ${game.wins}, Losses: ${game.losses}, Ties: ${game.ties}
  `;
}

// Initialize score display on load
updateScoreElement('0', '0', 'Start playing!');

