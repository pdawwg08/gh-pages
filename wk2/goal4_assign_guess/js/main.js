/**
 * GUESSING GAME:
 *
 * Created By: Preston Cain
 * Date: May 16th 2014
 * 
 * GUESSING GAME
 */

//Game variables
var guess=Math.round(Math.random()*(9)+1);
console.log(guess)
var dom = {
    input: document.querySelector("#input"),
    output: document.querySelector("#output"),
    button: document.querySelector("button")
}
console.log(dom.output.innerHTML)
dom.button.addEventListener('click', function validateInput(){
        var playersGuess = parseInt(dom.input.value);
        console.log(playersGuess)
        if (isNaN(playersGuess)){
            dom.output.innerHTML = "Please enter a number from 1 to 10"
        }
        if (playersGuess==guess){
            dom.output.innerHTML="Congratulations! "+guess+" is correct!";
        }
    
        console.log(dom.output.innerHTML)
