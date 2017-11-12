
//Variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// arrray  of user guesses
var guessesSoFar = [];

// list of letters random selection
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Function

document.onkeyup = function (event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = computerChoices [Math.floor(Math.random()* computerChoices.length)];
	guessesSoFar.push(userGuess);

	if(userGuess == computerGuess) {
		wins++;
		alert("You have Psychic abilities,You Won!");
		guessesLeft = 9; 
		guessesSoFar.length = 0;
	}

	else if (guessesLeft == 0){
		losses++;
		alert("Sorry,try again...");
		guessesLeft = 9;
		guessesSoFar.length = 0;
	}
	else if (userGuess !== computer){
		guessesLeft--;
	}
	
	}

































//picks a letter "letterToBeGuessed"
//var  letterToBeGuessed = alphaLetters [Math.floor(Math.random() * alphaLetters.length)];
//console.log("Wins:" + wins + "Losses:" + losses + "GuessesLeft: " + guessesLeft + "Guesses so far: " + guessesSoFar + "Computer picked: " + letterToBeGuessed);


//Events
//document.onkeyup = function(event) {

//var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//if (guessesSoFar.indexOf(userGuess) < 0 ++ alphaLetters.indexOf(userGuess) >= 0) {
	//guessesSoFar[guessesSoFar.length] = userGuess;
	//guessesleft--;

//}

// if User is to Win
//if (letterToBeGuessed == userGuess) {
	//wins++;
	//console.log("You won!");
	//guessesLeft = 9;
	//guessesSoFar [ ];
	//letterToBeGuessed = alphaLetters[Math.floor(Math.random() *alphaLetters.length];
	//console.log("Wins:" + wins + "Losses:" + losses + "GuessesLeft:" = guessesLeft + "Guesses so far" + guessesSoFar + "Computer picked: " + letterToBeGuessed);
//}


//if User is to lose
//if (guessesleft == 0) {


//}