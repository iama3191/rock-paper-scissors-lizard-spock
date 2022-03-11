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
            //this is the user's choice linked with the choices array
            const userOption = choices.find(choice => choice.name === optionSelected);

            gameStart(userOption);
        })
    }
    newRound.addEventListener('click', function(){
        nextRound();
    })

    restartButton.addEventListener('click', function() {
        restartGame();
    } )

    helpButton.addEventListener('click', function() {
        rulesScreen.style.display = 'block';
    })
    returnGame.addEventListener('click', function() {
        rulesScreen.style.display = 'none';
    })
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

    display(userOption, computerOption);

    if(userSelection === computerSelection) {  
    drawResult();
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

//function that will increment by 1 the number of rounds
function roundGame(user, computer) {
    if (user && computer) {
        let roundIncrement = parseInt(playRound.innerText);
        playRound.innerText = ++roundIncrement;

        if (roundIncrement === 5) {
           
            gameOver(user,computer);
        }
    }
}


//function will restartGame and set all values as zeros
function restartGame() {
    userPoint.innerText = 0;
    computerPoint.innerText = 0;
    playRound.innerText = 0; 
    userDisplay.innerHTML = '';
    computerDisplay.innerHTML = '';
    if(battleDisplay.style.display = 'block') {
        battleDisplay.style.display = 'none';
        gameDisplay.style.display = 'flex';
    } 
    if(gameOverModal.style.display= 'block') {
        gameOverModal.style.display = 'none';
    }
}

//game over  function 
function gameOver(user, computer) {

    gameOverModal.style.display = 'block';
    const userScoreFinal = parseInt(userPoint.innerText);
    const computerScoreFinal = parseInt(computerPoint.innerText);
    
    createModalScreen(userScoreFinal, computerScoreFinal);
    const gameOverMessage = document.querySelector('.final-message');
    const gameOverTitle = document.querySelector('.final-title');
    const playAgain = document.querySelector('.new-try');

    if (userScoreFinal===computerScoreFinal) {
        gameOverTitle.innerText= `It's a draw!`;
        gameOverMessage.innerText = `The final score is ${userScoreFinal} vs ${computerScoreFinal}`;
    } else if (userScoreFinal > computerScoreFinal) {
        gameOverTitle.innerText= `You win!!`;
        gameOverMessage.innerText = `The final score is ${userScoreFinal} vs ${computerScoreFinal}`;
    } else {
        gameOverTitle.innerText= `You lose!!`;
        gameOverMessage.innerText = `The final score is ${userScoreFinal} vs ${computerScoreFinal}`; 
    }

    playAgain.addEventListener('click', function() {

        restartGame();    
    })
}

//function that will activate a next round
function nextRound() {
    battleDisplay.style.display = 'none';
    gameDisplay.style.display = 'flex';
    userDisplay.innerHTML = '';
    computerDisplay.innerHTML = '';
}

//function that increments the computer score by 1 if it wins
function scoreComputer() {
    let computerIncrementScore = parseInt(computerPoint.innerText);
    computerPoint.innerText = ++computerIncrementScore;
}

//function that increments the user score by 1 if he wins
function scoreUser() {
    let userIncrementScore = parseInt(userPoint.innerText);
    userPoint.innerText = ++userIncrementScore;
}

//function that will change the style of the players container if the computer wins and show a message to the user.
function winnerComputer(user, computer) {
    messageDisplay.innerText = `You lose! ${computer} beats ${user}`;
    computerDisplay.classList.add('win-glow');
    userDisplay.classList.add('lose-glow');
    // code from https://www.w3schools.com/jsref/met_win_settimeout.asp 
    setTimeout(function (){ userDisplay.classList.remove('lose-glow')
}, 2500);

setTimeout(function (){ computerDisplay.classList.remove('win-glow')
}, 2500);
}

//function that will change the style of the players container if the user wins and show a message to the user.
function winnerUser(user, computer) {
    messageDisplay.innerText = `You win! ${user} beats ${computer}`;
    userDisplay.classList.add('win-glow');
    computerDisplay.classList.add('lose-glow');

    setTimeout(function (){ userDisplay.classList.remove('win-glow')
}, 2500);

setTimeout(function (){ computerDisplay.classList.remove('lose-glow')
}, 2500);
}

//function will verify if the nameSelected is in the selection.beats 
function whoWins(selection, nameSelected) {
//array with the options that can be defeated
 const options = selection.beats;
 // for loop to evaluate each option and compare with the nameSelected
 for (let i = 0; i < options.length; i++) {
    const option = options[i];
   
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
    imgUser.classList.add('change-hands');
    imgComputer.classList.add('change-hands');
    //Add new elements to the DOM
    userDisplay.appendChild(imgUser);
    computerDisplay.appendChild(imgComputer);
}

//function for showing the result in case of a draw
function drawResult() {
    messageDisplay.innerText = 'This a draw!';
    userDisplay.classList.add('draw-glow');
    computerDisplay.classList.add('draw-glow');
    setTimeout(function (){ userDisplay.classList.remove('draw-glow')
}, 2500);

setTimeout(function (){ computerDisplay.classList.remove('draw-glow')
}, 2500);
}

//function to create the elements for the modal screen for game over, after 5 rounds
function createModalScreen(user, computer) {
    //creating and anexing the title of the modal screen, it will change depending on who wins
    const title= document.createElement('h2');
    title.classList.add('final-title');
    document.querySelector('.modal-header-over').appendChild(title);

    //creating and adding the message for the user
    const finalMessage = document.createElement('p');
    finalMessage.classList.add('final-message');
    document.querySelector('.modal-content-over').appendChild(finalMessage);

    //creating and adding the button for the user to restart the game 
    const gameOverButton = document.createElement('button');
    gameOverButton.innerHTML = 'try again';
    gameOverButton.classList.add('new-try');
    document.querySelector('.modal-footer-over').appendChild(gameOverButton);
}