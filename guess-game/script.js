//variables
let attempts = 0;
let randomNum = Math.floor(Math.random() * 30 + 1);

// reaching elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsDone = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);
//
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;
  // conditions
  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed right!";
  } else if (userValue > randomNum) {
    hint.textContent = "Try lower Number!";
  } else {
    hint.textContent = "Try hight number!";
  }

  attemptsDone.textContent = "attepts:" + attempts;
}
