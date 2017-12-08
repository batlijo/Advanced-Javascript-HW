var words = ["Sugar, spice, everything, nice"];
var letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Tracking the guess of the letter? that would be 26 arrays? doesn't seem right

var wins = 0;
var losses = 0;
var userGuess = null;
var wordLetters = [];

//guess a letter
//correct
//wrong
var answerArray =[];
for(var i = 0; i < word.length; i++){
  answerArray[i]="_";
}
var remainingLetters = word.length;

var guess = ("Guess a letter");
