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
//Place the word into the word-to-guess element, with underscores
//Should also display ten remaining guesses in #remaining-guesses
var wordToGuess = document.querySelector("#word-to-guess");
wordToGuess.textContent = randomWord; //wordToGuess content set to randomWord

var unguessedWord = "";
for(var i =0; i<randomWord.length; i++){
 unguessedWord += "_";
}
wordToGuess.textContent = unguessedWord;


