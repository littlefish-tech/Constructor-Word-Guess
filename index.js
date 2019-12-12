
var Word = require("./word.js");



// set a list of word
var wordlist = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// The computer randomly pick a word
    var randomIndex = Math.floor(Math.random()*wordlist.length);
    // console.log(randomIndex)
    var word = wordlist[randomIndex]
    // console.log(word)
    
    var answerArray = [];
    for (var i=0; i < word.length; i++) {
       answerArray.push("_");
    }
    console.log(answerArray.join(" "));
    console.log(answerArray.length)

    // while (remainingLetters > 0) {
    var mistakes = 0;
    var maxMistakes = 12;

    function keyevent() {
inquirer.prompt()[
    {
        type: "input",
        message: "Please type a letter",
        name:"userInput"
    }
]
var isMistake = true;
if (mistakes >= maxMistakes){
    console.log("Game Over: Word was " + word)
    return
}
for (var i = 0; i < word.length; i++){
    if (userInput == word[i]){
        isMistake = false;
    console.log(word[i])
    answerArray[i]=userInput
    console.log(userInput);
    console.log(answerArray.join(" "));
    }

    console.log(mistakes);
    
}
    var correct = 0;
for (var i=0; i<word.length; i++){
    if (answerArray[i]==word[i]){
        correct++;
    }
}
if (correct == word.length) {
    console.log("You Win!!")
    //document.getElementById("userchoice-text").textContent = "You Win The Game!!" ;
}
if (isMistake == true) {
    mistakes++
    if (mistakes >= maxMistakes){
        console.log("You lose")
        //document.getElementById("userchoice-text").textContent = "Sorry, you lose." ;
    }
}
        console.log(answerArray.join(" "));
}



// var Word = require("./word.js");

// function WordArr(wordList) {
//     this.word = [];
//     // use for loop to loop through the word list
//     this.randomWord = function(){
//     for (i = 0; i = this.word.length; i++){
//         this.randomWord = this.word[i]
//     }
//     }
//     //computer randomly pick one work
//     this.addWord = function() {
//         this.word.push(new Word());
//       };
//     //chances the uses have

    
// };

// var theWords = new WordArr("Monday");

//     // calling
//     theWords.addWord("Tuesday");
//     theWords.addWord("Wednesday");
//     theWords.addWord("Thursday");
//     theWords.addWord("Friday");
//     theWords.addWord("Saturday");
//     theWords.addWord("Sunday");
//     console.log(theWords);

