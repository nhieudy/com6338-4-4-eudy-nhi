var words = [
  "bananas",
  "grapes",
  "carousel",
  "milkshake",
  "javascript",
  "limousine",
  "chocolate",
  "programming",
  "meatloaf",
  "ukulele",
  "mango",
];
//Generate a random word, based on the words array
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
var wins = document.querySelector("#wins");
var winCounter = 0;
var losses = document.querySelector("#losses");
var lossCounter = 0;
var guesses = document.querySelector("#remaining-guesses");
var guessCounter = 10;
var wordToGuess = document.querySelector("#word-to-guess");
var unguessedWord = "";

//Place the word into the word-to-guess element, with underscores
//Should also display ten remaining guesses in #remaining-guesses
//Guesses

guesses.textContent = guessCounter;
//Underscore word
for (let i = 0; i < randomWord.length; i++) {
  unguessedWord += "_"; //adds _ to the end of the string for the length of the word
}
wordToGuess.textContent = unguessedWord;

//Keyboard Input
var previousGuess = "";
var incorrectGuesses = document.querySelector("#incorrect-letters");
var incorrectList = [];
var arrayUnguessed = unguessedWord.split("");
document.addEventListener("keyup", function (e) {
  //Make sure it's in a letter, and not the other keyboard inputs
  if (e.key.match(/^[a-zA-Z]$/)) {
    var guess = e.key.toLowerCase();
  } else {
    return;
  }
  //Check if random word has guess in it
  if (randomWord.includes(guess)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (guess === randomWord[i]) {
        arrayUnguessed[i] = randomWord[i];
        unguessedWord = arrayUnguessed.join(""); //No commas
      }
    }
  } else if (guess === previousGuess) {
    return;
  } else {
    //Check if incorrectList array includes guess already
    if (incorrectList.includes(guess)) {
      return;
    } else {
      incorrectList.push(guess); //adds letter to incorrect list
      incorrectGuesses.textContent = incorrectList;
      guessCounter = guessCounter - 1; //lower guess counter
      guesses.textContent = guessCounter;
    }
  }
  previousGuess = guess;
  wordToGuess.textContent = unguessedWord;
  //Check if win or loss
  if (unguessedWord === randomWord && guessCounter >= 10){
    winCounter = winCounter + 1;
    wins.textContent = winCounter;
    console.log("You win!");
  }
  else if (unguessedWord !== randomWord && guessCounter == 0){
    lossCounter = lossCounter + 1;
    losses.textContent = lossCounter;
    console.log("You lose!");
  }
}
);

//PsuedoCode
//When started, game should have random word selected, and letters become underscored
//Guess = 10, Win = 0, Loss = 0 (until it increments)
//Key presses should be lowercase and it should not take non-letter inputs or repeat
//If it matches a letter in the word, the underscore should be replaced
//If it does not match, guess should decrement by 1
//If you guess the word AND guesses are greater than 0, win + 1
//If you do not guess the word, and guesses are less than 0, loss + 1
//Random word gets chosen again, game repeats with guesses set to 10

//May need to random word generated and game function be a separate function? and call when needed (at the start of the game, or win or loss)