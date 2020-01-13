/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();

//Setter  (Chance HTML)
//document.querySelector('#current-' + activePlayer).textContent = dice;   //just text
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //HTML


//Getter
//var x = document.querySelector('#score-0').textContent; //Read value of the content element


//Change CSS
//Hide the dice in the beginning (setting display property to none)
//document.querySelector('.dice').style.display = 'none';

/*****
function btn() {
    //Do something here
}
********/
// Not btn(), do btn    Because we don't want to call it right here
// We want the Event Listener to call the function for us
// It is callback function. Because it is a function that is not called by us, but another function
//Callback function: The function that we pass into another function as an argument.
//In this case addEventListener function call that function for us
/********document.querySelector('.btn-roll').addEventListener('click', );********/
// IF we do not want to write btn near the 'click', write the function inside the parantheses
//It is called anonymous, it is a function that doesn't have a name
// Like this document.querySelector('.btn-roll').addEventListener('click', function() {//Something} );


//for ID we use getElementbyID

//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
        
            // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';


        //3. Update the round score but only if the rolled number was not 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();
                    
        }


    }
    
        //Next player
            /*activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.dice').style.display = 'none';
            */

            //DON'T REPEAT YOURSELF




} );

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add current score to the global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer]; 
        

        //Check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' +  activePlayer).textContent = 'Winner!'; 
            document.querySelector('.dice').style.display = 'none';
            //Manipulate the CSS with CSS classes
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }

    
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    
    document.getElementById('current-1').textContent = '0';
    //Use toggle to the switch operation
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

//We do not need anonymous function, we need callback
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2'; 

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

