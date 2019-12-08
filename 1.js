
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
    document.getElementById("word-text").innerHTML = answerArray.join(" ");
    console.log(answerArray.length)

    // while (remainingLetters > 0) {
    var mistakes = 0;
    var maxMistakes = 12;

    document.onkeyup = function(event) {
var letter = event.key.toLowerCase();
var isMistake = true;
if (mistakes >= maxMistakes){
    console.log("Game Over: Word was " + word)
    return
}
for (var i = 0; i < word.length; i++){
    if (letter == word[i]){
        isMistake = false;
    console.log(word[i])
    answerArray[i]=letter
    document.getElementById("directions-text").innerHTML = letter;
    document.getElementById("word-text").innerHTML = answerArray.join(" ");
    }

    document.getElementById("userchoice-text").innerHTML = mistakes;
    
}
    var correct = 0;
for (var i=0; i<word.length; i++){
    if (answerArray[i]==word[i]){
        correct++;
    }
}
if (correct == word.length) {
    console.log("You Win!!")
    document.getElementById("userchoice-text").textContent = "You Win The Game!!" ;
}
if (isMistake == true) {
    mistakes++
    if (mistakes >= maxMistakes){
        console.log("You lose")
        document.getElementById("userchoice-text").textContent = "Sorry, you lose." ;
    }
}
        console.log(answerArray.join(" "));
}
