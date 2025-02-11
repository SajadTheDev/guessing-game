import './style.css';
('use strict');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const body = document.querySelector('body');
const numberBox = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');

document.querySelector('.check').addEventListener('click', function () {
  let guess = +guessInput.value;

  if (!guess) {
    displayMessage('No Number 👾');
    guessInput.classList.add('shake'); // اضافه کردن افکت لرزش
    setTimeout(() => guessInput.classList.remove('shake'), 500);
  } else if (guess === secretNumber) {
    displayMessage('🎉 Is Correct! 👻');
    displayNumber(secretNumber);

    body.style.background = 'linear-gradient(to right, #00c6ff, #0072ff)';
    numberBox.style.width = '30rem';
    numberBox.style.background = '#fff';
    numberBox.style.color = '#333';

    // نمایش پیام برنده شدن
    const winMessage = document.createElement('div');
    winMessage.textContent = '🏆 Congratulations! You Won!';
    winMessage.classList.add('win-message');
    body.appendChild(winMessage);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    guessInput.classList.add('shake');
    setTimeout(() => guessInput.classList.remove('shake'), 500);

    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      displayMessage('☠️ The game is over!');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayNumber('?');
  guessInput.value = '';

  body.style.background = '#222';
  numberBox.style.width = '15rem';
  numberBox.style.background = '#eee';
  numberBox.style.color = '#333';

  // حذف پیام برنده شدن
  const winMessage = document.querySelector('.win-message');

  if (winMessage) winMessage.remove();
});
