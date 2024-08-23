let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let guessInput = document.querySelector(".guess_input");
let submitBtn = document.querySelector(".btn");
let resultBox = document.querySelector(".result_text");
let attemptsDisplay = document.querySelector(".attempts");
let resetBtn = document.querySelector(".reset_btn");

submitBtn.onclick = function () {
    let userGuess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        resultBox.textContent = "Congratulations! You guessed it right!";
        resultBox.style.color = "#28a745";  // Green color for success
        submitBtn.disabled = true;
    } else if (userGuess < randomNumber) {
        resultBox.textContent = "Too low! Try again.";
        resultBox.style.color = "#ffc107";  // Yellow color for a hint
    } else {
        resultBox.textContent = "Too high! Try again.";
        resultBox.style.color = "#ffc107";  // Yellow color for a hint
    }
};

resetBtn.onclick = function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    guessInput.value = '';
    resultBox.textContent = "Make a guess!";
    resultBox.style.color = "#fff";
    submitBtn.disabled = false;
};
