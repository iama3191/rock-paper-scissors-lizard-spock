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

//From Math Project, Code Institute and adapted for this project 
//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.user-option');

    for (let button of buttons) {

        button.addEventListener('click', function() {
            
            const optionSelected = this.getAttribute('data-option');
            const userOption = (choices.find(choice => choice.name === optionSelected)).name;

            console.log(`1 ${userOption}`);
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
function gameStart(userChoice) {
    const computerChoice = computerRandomChoice();
    const choice = computerChoice.name;
    console.log(`2 ${choice}`);
}