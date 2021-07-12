'use strict';
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222)
*/
let numberRandom = Math.trunc(Math.random() * 20) + 1;
let gameScore = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';
//Again Button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  gameScore = 10;
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  numberRandom = Math.trunc(Math.random() * 20) + 1;
});
//Guess Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('🔴 No Number');
  }
  //When player wins
  else if (guess === numberRandom) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numberRandom;
    if (gameScore > highscore) {
      highscore = gameScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When the guess is incorrect(Too High or Too Low)
  else if (guess !== numberRandom) {
    if (gameScore > 1) {
      displayMessage(guess > numberRandom ? '💥 Too High!' : '💤 Too Low');
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    }
    //When the player lost because the number is too high
    else {
      displayMessage('💔 You lost. F');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = numberRandom;
    }
  }
});
console.log('Paulin bacana');
