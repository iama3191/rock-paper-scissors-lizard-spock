// With the help of tutorial How To Code Rock Paper Scissors In JavaScript https://www.youtube.com/watch?v=1yS-JV4fWqY&t=782s; I was able to understand JavaScript and how I can use an array of objects to improve my coding skills.

//Constants declaration. Below are all the constant that are necessary for the game
const choices = [{
    name: 'rock',
    image: './assets/images/hand-back-fist-solid.svg',
    beats: ['scissors', 'lizard']
},
{
    name: 'paper',
    image: './assets/images/hand-solid.svg',
    beats: ['rock', 'spock']
},
{
    name: 'scissors',
    image: './assets/images/hand-scissors-solid.svg',
    beats: ['paper', 'lizard']
},
{
    name: 'lizard',
    image: './assets/images/hand-lizard-solid.svg',
    beats: ['paper', 'spock']
},
{
    name: 'spock',
    image: './assets/images/hand-spock-solid.svg',
    beats: ['rock', 'scissors']
}
];

const userInstruction = document.querySelector('.user-instruction');
const userDisplay = document.querySelector('.user-selection');
const computerDisplay = document.querySelector('.computer-selection');
const messageDisplay = document.querySelector('.message');
const gameDisplay = document.querySelector('.user-options-container');
const battleDisplay = document.querySelector('.battle-results');
const playRound = document.querySelector('.round-result');
const userPoint = document.getElementById('user-result');
const computerPoint = document.getElementById('computer-result');
const newRound = document.getElementById('next-round');
const restartButton = document.querySelector('#restart');
const helpButton = document.querySelector('#help');
const rulesScreen = document.querySelector('.outer-modal-container');
const returnGame = document.querySelector('#return');
const gameOverModal = document.querySelector('.outer-modal-container-over');

//From Math Project, Code Institute and adapted for this project 
//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
const buttons = document.querySelectorAll('.user-option');

for (let button of buttons) {

    button.addEventListener('click', function() {
        //Will identify the clicked button
        const optionSelected = this.getAttribute('data-option');
        //method shown in https://www.youtube.com/watch?v=1yS-JV4fWqY&t=782s
        const userOption = choices.find(choice => choice.name === optionSelected);

        gameStart(userOption);
    });
}
//button for the next round
newRound.addEventListener('click', function() {
    nextRound();
});
//button for restart the game whenever the user wants
restartButton.addEventListener('click', function() {
    restartGame();
});
//button for showing the rules to the user
helpButton.addEventListener('click', function() {
    rulesScreen.style.display = 'block';
});
//button for going back to the game
returnGame.addEventListener('click', function() {
    rulesScreen.style.display = 'none';
});
createModalScreen();
});

/**
* function for getting a random object for the computer
* @returns {object}
*/
function computerRandomChoice() {
const randomChoice = choices[Math.floor(Math.random() * choices.length)];
return randomChoice;
}

/**
* //function for starting the game after user clicks on a choice
* @param {object} userOption object from array 'choices' 
*/
function gameStart(userOption) {
const computerOption = computerRandomChoice();
//value of the key 'name' from the selected object
const computerSelection = computerOption.name;
const userSelection = userOption.name;

display(userOption, computerOption);

if (userSelection === computerSelection) {
    drawResult(userSelection, computerSelection);
} else {
    //const to determine if the user wins
    const userWins = whoWins(userOption, computerSelection);

    if (userWins) {
        winnerUser(userSelection, computerSelection);
        scoreUser();
    } else {
        winnerComputer(userSelection, computerSelection);
        scoreComputer();
    }
}
roundGame(userSelection, computerSelection);
}

/**
* //function that will increment by 1 the number of rounds
* @param {string} user - value of property 'name'
* @param {string} computer -value of property 'name'
*/
function roundGame(user, computer) {
if (user && computer) {
    let roundIncrement = parseInt(playRound.innerText);
    playRound.innerText = ++roundIncrement;

    if (roundIncrement === 5) {
        gameOver(user, computer);
    }
}
}

/**
* function will restart the game and set scores' values to '0' and restore all the layouts
*/
function restartGame() {
restartDisplay();
userPoint.innerText = 0;
computerPoint.innerText = 0;
playRound.innerText = 0;
userDisplay.innerHTML = '';
computerDisplay.innerHTML = '';
userInstruction.style.display = 'block';
if (battleDisplay.style.display = 'block') {
    battleDisplay.style.display = 'none';
    gameDisplay.style.display = 'flex';
}
if (gameOverModal.style.display = 'block') {
    gameOverModal.style.display = 'none';
}
}

/**
* Function to show a modal screen with the final results of the game
* @param {string} user option selected 
* @param {string} computer random choice
*/
function gameOver(user, computer) {
gameOverModal.style.display = 'block';
const userScoreFinal = parseInt(userPoint.innerText);
const computerScoreFinal = parseInt(computerPoint.innerText);
const gameOverMessage = document.querySelector('.final-message');
const gameOverTitle = document.querySelector('.final-title');
const playAgain = document.querySelector('.new-try');
const gameOverContainer = document.querySelector('.modal-container-over');

if (userScoreFinal === computerScoreFinal) {
    gameOverContainer.setAttribute('id', 'draw-game');
    gameOverTitle.innerText = `It's a draw!`;
    gameOverMessage.innerHTML = `The last round was ${user} vs ${computer}. <br> The final score is ${userScoreFinal} vs ${computerScoreFinal}. <br>Do you want to play again?`;
} else if (userScoreFinal > computerScoreFinal) {
    gameOverContainer.setAttribute('id', 'win-game');
    gameOverTitle.innerText = `Congratulations! You win!!`;
    gameOverMessage.innerHTML = `The last round was ${user} vs ${computer}. <br> The final score is ${userScoreFinal} vs ${computerScoreFinal}. <br>Do you want to play again?`;
} else {
    gameOverContainer.setAttribute('id', 'lose-game');
    gameOverTitle.innerText = `You lose!!`;
    gameOverMessage.innerHTML = `The last round was ${user} vs ${computer}. <br> The final score is ${userScoreFinal} vs ${computerScoreFinal}. <br>Do you want to play again?`;
}

playAgain.addEventListener('click', function() {
    restartGame();
})
}

/**
* function to activate the next round of the game. Main game container appears and battle container is hidden
*/
function nextRound() {
restartDisplay();
battleDisplay.style.display = 'none';
userInstruction.style.display = 'block';
gameDisplay.style.display = 'flex';
userDisplay.innerHTML = '';
computerDisplay.innerHTML = '';
}

/**
* function for incrementing the computer's score by 1 if it wins
*/
function scoreComputer() {
let computerIncrementScore = parseInt(computerPoint.innerText);
computerPoint.innerText = ++computerIncrementScore;
}

/**
* function for incrementing the user's score by 1 if he wins
*/
function scoreUser() {
let userIncrementScore = parseInt(userPoint.innerText);
userPoint.innerText = ++userIncrementScore;
}

/**
* function for showing the players' selections in their respective containers
* @param {object} userSelection - object from the array choices
* @param {object} computerOption object from the array choices
*/
function display(userSelection, computerOption) {
//modify style 
userInstruction.style.display = 'none';
gameDisplay.style.display = 'none';
battleDisplay.style.display = 'block';
//create new elements
const imgUser = document.createElement('img');
const imgComputer = document.createElement('img');
//add the image from the array choices
imgUser.src = userSelection.image;
imgComputer.src = computerOption.image;
imgUser.classList.add('change-hands');
imgComputer.classList.add('change-hands');
//Add new elements to the DOM
userDisplay.appendChild(imgUser);
computerDisplay.appendChild(imgComputer);
}

/**
* function to remove the clases from the players' containers and restore the original layout
*/
function restartDisplay() {
//code from https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
if (userDisplay.classList.contains('win-glow')) {
    userDisplay.classList.remove('win-glow');
    computerDisplay.classList.remove('lose-glow');
} else if (userDisplay.classList.contains('lose-glow')) {
    userDisplay.classList.remove('lose-glow');
    computerDisplay.classList.remove('win-glow');
} else {
    userDisplay.classList.remove('draw-glow');
    computerDisplay.classList.remove('draw-glow');
}
}

/**
* function will verify if the computer choice is in the property 'beats' of the user's object
* @param {object} selection 
* @param {string} nameSelected 
* @returns boolean
*/
function whoWins(selection, nameSelected) {
//array with the options that can be defeated
const options = selection.beats;
// for loop to evaluate each option and compare with the nameSelected
for (let i = 0; i < options.length; i++) {
    const option = options[i];

    if (option === nameSelected) {
        return true;
    }
}
}

/**
* function for showing the result in case of a draw
* @param {string} user 
* @param {string} computer 
*/
function drawResult(user, computer) {
messageDisplay.innerText = `This is a draw! ${user} equals ${computer}`;
userDisplay.classList.add('draw-glow');
computerDisplay.classList.add('draw-glow');
}

/**
* function that will change the style of the players container if the user wins and show a message to the user.
* @param {string} user 
* @param {string} computer 
*/
function winnerUser(user, computer) {
messageDisplay.innerText = `You win! ${user} beats ${computer}`;
userDisplay.classList.add('win-glow');
computerDisplay.classList.add('lose-glow');
}

/**
* function that will change the style of the players container if the computer wins and show a message to the user.
* @param {string} user 
* @param {string} computer 
*/
function winnerComputer(user, computer) {
messageDisplay.innerText = `You lose! ${computer} beats ${user}`;
computerDisplay.classList.add('win-glow');
userDisplay.classList.add('lose-glow');
}

/**
*function to create the elements for the modal screen for game over, after 5 rounds
*/
function createModalScreen() {
//creating and anexing the title of the modal screen, it will change depending on who wins
const title = document.createElement('h2');
title.classList.add('final-title');
document.querySelector('.modal-header-over').appendChild(title);

//creating and adding the message for the user
const finalMessage = document.createElement('p');
finalMessage.classList.add('final-message');
document.querySelector('.modal-content-over').appendChild(finalMessage);

//creating and adding the button for the user to restart the game 
const gameOverButton = document.createElement('button');
gameOverButton.innerHTML = 'play again';
gameOverButton.classList.add('new-try');
//info from https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
gameOverButton.setAttribute('aria-label', 'start button for a new game');
document.querySelector('.modal-footer-over').appendChild(gameOverButton);
}