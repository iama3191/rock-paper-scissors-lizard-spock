//Declare constants 
const choices = [
    {
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

const userDisplay = document.querySelector('.user-selection');
const computerDisplay = document.querySelector('.computer-selection');
const messageDisplay = document.querySelector('.message');
const gameDisplay = document.querySelector('.user-options-container');
const battleDisplay = document.querySelector('.battle-results');

//From Math Project, Code Institute and adapted for this project 
//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.user-option');

    for (let button of buttons) {

        button.addEventListener('click', function() {
            //Will identify the clicked button
            const optionSelected = this.getAttribute('data-option');
            //this is the user's choice linked with the choices array
            const userOption = choices.find(choice => choice.name === optionSelected);

            gameStart(userOption);
        })
    }
})

//function for having a random choice for the computer
function computerRandomChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //this will return the object from the random index
    return randomChoice;
}

//function for starting the game, it iniciates after user clicks on a button
function gameStart(userOption) {
    //a random choice for the computer
    const computerOption = computerRandomChoice();
    const computerSelection = computerOption.name;
    const userSelection = userOption.name;

    console.log(`1 ${userOption.name} 2 ${computerSelection}`);
    display(userOption, computerOption);

    if(userSelection === computerSelection) {  
    drawResult();
    } else {
        
        //const to determine if the user wins
        const userWins = whoWins(userOption, computerSelection);

        if (userWins) {
            console.log(`5 the user won. ${userWins}`);
            winnerUser(userSelection, computerSelection);
        } else {
            console.log(`5 the user lost`);
        }
    }
}

// function that will change the userScore
function winnerUser(user, computer) {
    messageDisplay.innerText = `You win! ${user} beats ${computer}`;
    userDisplay.classList.add('win-glow');
    computerDisplay.classList.add('lose-glow');
}

//function will verify if the nameSelected is in the selection.beats 
function whoWins(selection, nameSelected) {
//array with the options that can be defeated
 const options = selection.beats;
 // for loop to evaluate each option and compare with the nameSelected
 for (let i = 0; i < options.length; i++) {
    const option = options[i];
    console.log(`3 ${option} 4 ${nameSelected}`);
   if(option === nameSelected) {
       return `${selection.name} beats ${nameSelected}`;
   } //else {
    //return `${nameSelected} beats ${selection.name}`;
   //}
}}

//function for showing the player's selection in their containers
function display (userSelection, computerOption) {
    //modify style 
    gameDisplay.style.display = 'none';
    battleDisplay.style.display = 'block';
    //create new elements
    const imgUser = document.createElement('img');
    const imgComputer = document.createElement('img');
    //add the image from the array choices
    imgUser.src = userSelection.image;
    imgComputer.src = computerOption.image;
    //Add new elements to the DOM
    userDisplay.appendChild(imgUser);
    computerDisplay.appendChild(imgComputer);
}

//function for showing the result in case of a draw
function drawResult() {
    messageDisplay.innerText = 'This a draw!';
    userDisplay.classList.add('draw-glow');
    computerDisplay.classList.add('draw-glow');
}