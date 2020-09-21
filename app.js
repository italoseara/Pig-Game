// Variable declaration
var scores, roundScore, activePlayer, gameState;

// init the game
init();

// Button to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gameState) {
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
            currentPlayer.textContent = 0; // Reset the display score
            switchPlayers();    
        };
    };
});

// Button to hold the points
document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gameState) {
        document.getElementById('current-' + activePlayer).textContent = 0; // Reset the display score
        scores[activePlayer] += roundScore; // set the global score
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]; // Display on the screen
        document.querySelector('.dice').style.display = 'none';
        
        if (scores[activePlayer] >= 100) { // Check if someone won the game
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameState = false;

        } else {
            switchPlayers();
        }
    };
});

// Button to create a new game
document.querySelector('.btn-new').addEventListener('click', init);

// FUNCTIONS
function init() {
    gameState = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

function switchPlayers() {
    // Remove the active class
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Switch players
    
    // Add the active class
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    roundScore = 0; // Reset the round score
};