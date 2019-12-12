
var Word = require("./word.js");

var inquirer = require("inquirer");

// set a list of word
var wordlist = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// The computer randomly pick a word
var totalChance = 10;
    var randomIndex = Math.floor(Math.random()*wordlist.length);
    // console.log(randomIndex)
    var randomWord = wordlist[randomIndex]

    var word = new Word(randomWord);
    // console.log(word)
    function checkLetters(word){
        inquirer.prompt([
            {
                type: "input",
                message:"Please type a letter.",
                name: "userInput"
            }
        ]).then(function(){
            for (i = 0; i < randomWord.length; i++){
                if (word.userInput === randomWord[i] || totalChance > 0){
                    word.letterArr.push(word.userInput);
                } else if (word.userInput !== randomWord[i] || totalChance > 0){
                    totalChance--               
                    console.log("You type a wrong letter, please try again")
                    console.log("You still have " + totalChance + " chances.")
                }else{
                    console.log('You lose.')
                    
                    inquirer.prompt([
                        {
                            type: "rawlist",
                            message: "Do you want to try it again?",
                            choice: ["Yes, I do want to try it", "Sorry, I don't."]
                        }
                    ]).then(function(answer){
                        if (indexOf(answer.choice) = 0){
                            checkLetters(word)
                        }else{
                            console.log("Bye, see you again");
                        }
                    })
            
                }
            }

        })

    }
