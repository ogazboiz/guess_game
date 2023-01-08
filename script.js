'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
document.querySelector('.number').textContent = '?';
let scoreBoard = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log();
  const guess = Number(document.querySelector('.guess').value);
  const Checknumber = document.querySelector('.message');
  console.log(typeof guess, guess);

  if (!guess) {
    Checknumber.textContent = 'no number';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'you won 🏆';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreBoard > highScore) {
      highScore = scoreBoard;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > randomNumber) {
    if (scoreBoard > 1) {
      document.querySelector('.message').textContent = 'go lower ';
      scoreBoard = scoreBoard - 1;
      document.querySelector('.score').textContent = scoreBoard;
    } else {
      document.querySelector('.message').textContent = 'game over';
      document.querySelector('body').style.background = '#e60000';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < randomNumber) {
    if (scoreBoard > 1) {
      document.querySelector('.message').textContent = 'go higher ';
      scoreBoard = scoreBoard - 1;
      document.querySelector('.score').textContent = scoreBoard;
    } else {
      document.querySelector('.message').textContent = 'game over';
      document.querySelector('body').style.background = '#e60000';
      document.querySelector('.score').textContent = '0';
    }
  }
});
const restart = function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
};

document.querySelector('.again').addEventListener('click', restart);
