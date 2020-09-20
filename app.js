/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variable declaration
var scores, roundScore, activePlayer;

// init the game
startGame();

// Default values
function startGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
};

function switchPlayers() {
    // Remove the active class
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Switch players
    // Add the active class
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
};

// Button to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // Random number (1 to 6)
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; // Turn it visible again
    diceDOM.src = 'dice-' + dice + '.png'; // Change the image
    console.log('Rolled '+ dice + '!'); // Log it into the console

    // Update the round if the rolled number is not a 1
    var currentPlayer = document.getElementById('current-' + activePlayer);

    if (dice !== 1) {

        roundScore += dice; // Add to the round score the dice value
        currentPlayer.textContent = roundScore; // Display on the screen

    } else {

        roundScore = 0;
        currentPlayer.textContent = 0; // Reset the display score
        switchPlayers();    
    };
});

// Button to hold the points
document.querySelector('.btn-hold').addEventListener('click', function() {

    document.getElementById('current-' + activePlayer).textContent = 0; // Reset the display score
    scores[activePlayer] += roundScore; // set the global score
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]; // Display on the screen
    switchPlayers();
    roundScore = 0; // Reset the roundscore
});

// Button to create a new game
document.querySelector('.btn-new').addEventListener('click', function() {startGame()});