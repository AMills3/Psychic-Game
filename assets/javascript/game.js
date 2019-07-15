var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var answer;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];



var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer)


document.onkeypress = function(event) {
var userGuess = event.key;
guesses.push(userGuess);

if (userGuess === answer) {
    win();
        
} else {
    guessesLeft--;
}

if (guessesLeft == 0) {
    loss();
    }


function win() {
	wins++;
	reset();
}


function loss() {
	losses++;
	reset();
}


function reset() {
	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer);
	guessesLeft = 9;
	guesses =[];
}


document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById('guesses').innerHTML = "Your guesses so far: " + guesses;
}