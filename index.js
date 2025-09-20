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
//Initial state, when game is first loaded in:
var randomWord = words[Math.floor(Math.random() * words.length)];
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var guesses = document.querySelector("#remaining-guesses");
var wordToGuess = document.querySelector("#word-to-guess");
var previousWord = document.querySelector("#previous-word");
var incorrectGuesses = document.querySelector("#incorrect-letters");
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 10;
guesses.textContent = guessCounter;
var unguessedWord = "";
var previousGuess = "";
var preWord = "";
var incorrectList = [];

//Underscore word
for (let i = 0; i < randomWord.length; i++) {
  unguessedWord += "_"; //adds _ to the end of the string for the length of the word
}
wordToGuess.textContent = unguessedWord;
var arrayUnguessed = unguessedWord.split("");

//Keyboard Input
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
  if (unguessedWord === randomWord && guessCounter > 0){
    winCounter = winCounter + 1;
    wins.textContent = winCounter;
    preWord = randomWord;
    previousWord.textContent = preWord;
    console.log("You win!");
    var restartGameValues = restartGame();
    //reset
    guessCounter = restartGameValues.guessC;
    guesses.textContent = guessCounter;
    incorrectList = restartGameValues.incorrectL;
    incorrectGuesses.textContent = incorrectList;
    randomWord = restartGameValues.randomW;
    unguessedWord = restartGameValues.unguessedW;
    wordToGuess.textContent = unguessedWord;
  }
  else if (unguessedWord !== randomWord && (guessCounter <= 0)){
    lossCounter = lossCounter + 1;
    losses.textContent = lossCounter;
    console.log("You lose!");
    preWord = randomWord;
    previousWord.textContent = preWord;
    var restartGameValues = restartGame();
    //reset
    guessCounter = restartGameValues.guessC;
    guesses.textContent = guessCounter;
    incorrectList = restartGameValues.incorrectL;
    incorrectGuesses.textContent = incorrectList;
    randomWord = restartGameValues.randomW;
    unguessedWord = restartGameValues.unguessedW;
    wordToGuess.textContent = unguessedWord;
  }
}
);

function restartGame(){
console.log("restart");
incorrectList = [];
unguessedWord = "";
randomWord = "";
guessCounter = 10;
randomWord = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < randomWord.length; i++) {
  unguessedWord += "_";
}
arrayUnguessed = unguessedWord.split("");
console.log("Restart unguessed word: " + unguessedWord)
var restartGameValues = {
  guessC: guessCounter,
  randomW: randomWord,
  unguessedW: unguessedWord,
  incorrectL: incorrectList
}
return(restartGameValues);
}

//PsuedoCode
//When started, game should have random word selected, and letters become underscored
//Guess = 10, Win = 0, Loss = 0 (until it increments)
//Key presses should be lowercase and it should not take non-letter inputs or repeat
//If it matches a letter in the word, the underscore should be replaced
//If it does not match, guess should decrement by 1
//If you guess the word AND guesses are greater than 0, win + 1
//If you do not guess the word, and guesses are less than 0, loss + 1
//Random word gets chosen again, game repeats with guesses set to 10
