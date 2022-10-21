

var winCount = 0; 

var max = 2;

var uname = prompt("Input your Username: ")


function guessNumber() {

    function contGame() {
        max++;
        guessNumber();
    }

    
    var random = Math.floor(Math.random() * max) + 1;

    
    
    let number = parseInt(prompt('Guess a number from 1 to ' + max + ' : '));

    
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to ' + max + ' : '));
    }

    
    if(number == random) {
        console.log('You guessed the correct number.');
        winCount++;
        console.log( uname + 'You have ' + winCount + ' point');
        contGame();
            
        
    }
}
        



guessNumber();