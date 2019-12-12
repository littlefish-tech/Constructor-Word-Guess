function Letter(wordLetter) {
    this.wordLetter = wordLetter;
    this.letterGuessed = false;
    this.checkLetter = function (character){
        if (character === this.wordLetter) {
            this.letterGuessed = true;
        }
    }                                              
    this.displayLetter = function() {
        if (this.letterGuess === true) {
            return this.wordLetter;
        } else {
            return "_";
        }
    }

    
}
module.exports = Letter;