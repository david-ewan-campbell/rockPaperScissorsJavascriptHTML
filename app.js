const computerChoice = document.getElementById('computer-choice');
const userChoiceDisplayed = document.getElementById('user-choice');
const resultDisplayed = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(choices => choices.addEventListener('click', (choice) => {
  userChoice = choice.target.id
  userChoiceDisplayed.innerHTML = userChoice
}));