'use strict'

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const currentScore0El = document.querySelector('.current--0');
const currentScore1El = document.getElementById('current--1')


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
    // generate roled dice amount
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);


//  display dice
diceEl.classList.remove('hidden');
diceEl.src = `media/dice-${dice}.png`;

//   check for rolled1; if true, switch next player
if (dice !== 1){
    // Add dice to currentscore
      currentScore += dice;
      current0El.textContent = currentScore;
} else {

}

})



