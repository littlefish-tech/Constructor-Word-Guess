
var Word = require("./word.js");

var inquirer = require("inquirer");

// set a list of word
var wordlist = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// The computer randomly pick a word
var totalChance = 10;
var randomIndex = Math.floor(Math.random() * wordlist.length);

// console.log(randomIndex)
var randomWord = wordlist[randomIndex]
console.log(randomWord);
var computerWord = new Word(randomWord);
// console.log(word)
function checkLetters(computerWord) {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type a letter.",
            name: "userInput"
        }
    ]).then(function (typeiInput) {
        for (i = 0; i < randomWord.length; i++) {
            if (typeiInput.userInput === randomWord[i] && totalChance > 0) {
                Word.lettersArr.push(typeiInput.userInput);
            } else if (typeiInput.userInput !== randomWord[i] && totalChance > 0) {
                totalChance--
                console.log("You type a wrong letter, please try again")
                console.log("You still have " + totalChance + " chances.")
            } else {
                console.log('You lose.')
function checkToPlayAgain(){
                inquirer.prompt([
                    {
                        type: "rawlist",
                        message: "Do you want to try it again?",
                        choice: ["Yes, I do want to try it", "Sorry, I don't."]
                    }
                ]).then(function (answer) {
                    if (indexOf(answer.choice) = 0) {
                        checkLetters(word)
                    } else {
                        console.log("Bye, see you again");
                    }
                
                })
            }
            checkToPlayAgain();
            }
        }

    })
    
}
checkLetters();