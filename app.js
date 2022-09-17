let result

const computerChoiceDisplayed = document.getElementById('computer-choice');
const userChoiceDisplayed = document.getElementById('user-choice');
const resultDisplayed = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(choices => choices.addEventListener('click', (choice) => {
  userChoice = choice.target.id
  userChoiceDisplayed.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  //console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplayed.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'It\'s a draw!' 
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You won!'
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'You lost!'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You won!'
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You lost!'
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You won!'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'You lost!'
  }
  resultDisplayed.innerHTML = result
}
