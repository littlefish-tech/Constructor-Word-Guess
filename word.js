var letter = require("./letter");

var Word = function(wordList, randomWord) {
    this.wordList = wordList;
    this.randomWord = function (){
        for (i = 0; i < wordList.length; i++) {
            randomWord = wordList[i];
        }
    }
}

module.exports = Word;