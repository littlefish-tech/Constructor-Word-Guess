
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



function checkLetters() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type a letter.",
            name: "userInput"
        }
    ]).then(function (answers) {
        for (i = 0; i < randomWord.length; i++) {
            var currentLetter = randomWord[i];
        }
            if (answers.userInput === currentLetter && totalChance > 0) {
                computerWord.guessedletter === true;
                console.log(computerWord.addDisplayLetter);
            } else if (answers.userInput !== currentLetter && totalChance > 0) {
                totalChance--
                console.log("You type a wrong letter, please try again")
                console.log("You still have " + totalChance + " chances.")
                checkLetters();
            } else {
                console.log('You lose.')
                checkToPlayAgain()

            }
        

    })
    
}
checkLetters();

function checkToPlayAgain(){
    inquirer.prompt([
        {
            name: "action",
            type: "rawlist",
            message: "Do you want to try it again?",
            choice: ["Yes, I do want to try it", "Sorry, I don't."]
            
        }
    ]).then(function (answers) {
        switch(answers.action) {
            case "Yes, I do want to try it":
            checkLetters(word);
            break;
            
            case "Sorry, I don't.":
            stopPlaying();
            break;
        }
    
    })
}
checkToPlayAgain();