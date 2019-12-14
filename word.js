var Letter = require("./letter.js");


function Word(lettersArr) {
    this.lettersArr = [];
    // for (i = 0; i < this.lettersArr.length; i++){
    //     var letter = new Letter(lettersArr[i])
    //     this.lettersArr.push(letter);
    // }
    this.addDisplayLetter = function(){
        if (Letter.letterGuess === True){
        console.log(this.lettersArr.push(Letter.wordLetter));
        } else {
            return this.lettersArr.push("_");
}
    }
this.guessedletter = function(charactor){
    if (Letter.checkLetter === true){
        console.log('Good Job!')
    }else {
        console.log("Sorry, try one more!")
    }
}
}

module.exports = Word;

// var Words = function() {
//     this.wordList = [];
//     this.seeLetter = function() {
//         this.wordList.push(new this.displayLetter());
//     }

//     this.guessLetter = function(){
//         this.wordLists.push(new this.checkLetter());

//     }
// }

// module.exports = Words;
// for (i = 0; i<lettersInWord.length; i++) {
//     var typedLetter = new Letter(lettersInWord[i]);
//     this.selectedWord = this.lettersInWord.push(typedLetter)
//     console.log(this.join().split(","),join(" "));
// }
// this.eachLetter = function(){
//     eachLetterIn = "";
//     for (i = 0; i < this.lettersInWord.length; i++){
//         lettersInWord += this.lettersInWord;
//     } 
// }
// this.addcheckLetter = function()
