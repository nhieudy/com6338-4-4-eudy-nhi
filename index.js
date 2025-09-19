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
//Place the word into the word-to-guess element, with underscores
//Should also display ten remaining guesses in #remaining-guesses
//Guesses
var guessCounter = 10;
var guesses = document.querySelector("#remaining-guesses");
guesses.textContent = guessCounter;
//Underscore word
var wordToGuess = document.querySelector("#word-to-guess");
var unguessedWord = "";
for(let i =0; i<randomWord.length; i++){
 unguessedWord += "_"; //adds _ to the end of the string for the length of the word
}
wordToGuess.textContent = unguessedWord;

//Keyboard Input
var arrayUnguessed = unguessedWord.split("");
document.addEventListener('keyup', function(e){
//Guess counter
var updatedWord = "";
guesses.textContent = guessCounter;
var guess = e.key.toLowerCase();
for (let i = 0; i<randomWord.length; i++){
  if(guess === randomWord[i]){
    arrayUnguessed[i] = randomWord[i];
    unguessedWord = arrayUnguessed.join("");//No commas
  }
  else{
guessCounter = guessCounter -1;
  }
}
wordToGuess.textContent = unguessedWord;
}
)



