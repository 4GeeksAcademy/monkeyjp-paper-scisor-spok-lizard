import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
  };

  const buttons = document.querySelectorAll('#choices button');
  const userChoiceSpan = document.getElementById('user-choice');
  const computerChoiceSpan = document.getElementById('computer-choice');
  const winnerText = document.getElementById('winner');

  // Key mapping
  const keyMap = {
    q: 'rock',
    w: 'paper',
    e: 'scissors',
    r: 'lizard',
    t: 'spock'
  };

  function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (userChoice === computerChoice) {
      winnerText.textContent = "It's a draw!";
    } else if (rules[userChoice].includes(computerChoice)) {
      winnerText.textContent = "You win! 🎉";
    } else {
      winnerText.textContent = "You lose 😢";
    }
  }

  // Mouse click
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const userChoice = button.getAttribute('data-choice');
      playGame(userChoice);
    });
  });

  // Keyboard input
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (keyMap[key]) {
      playGame(keyMap[key]);
    }
  });
};
