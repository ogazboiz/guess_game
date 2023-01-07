let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
document.querySelector('.number').textContent = randomNumber;
let scoreBoard = 20;

document.querySelector('.check').addEventListener('click', function (e) {
  console.log();
  const guess = Number(document.querySelector('.guess').value);
  const Checknumber = document.querySelector('.message');
  console.log(typeof guess, guess);

  if (guess == 0) {
    Checknumber.textContent = 'no number';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'you won 🏆';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'go lower ';
    scoreBoard = scoreBoard - 1;
    document.querySelector('.score').textContent = scoreBoard;
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'go higher ';
    scoreBoard = scoreBoard - 1;
    document.querySelector('.score').textContent = scoreBoard;
  }
});
