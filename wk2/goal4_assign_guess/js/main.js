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
var clickCount = 0;
console.log(dom.output.innerHTML)
dom.button.addEventListener('click', function validateInput(){
    var clickLimit = 3; //Max number of clicks
	if(clickCount>=clickLimit) {
		alert("You only have "+clickLimit+" tries.");
	}else{
		clickCount++;
        var playersGuess = parseInt(dom.input.value);
        console.log(playersGuess)
        if (isNaN(playersGuess)){
            dom.output.innerHTML = "Please enter a number from 1 to 10"
        }
        if (playersGuess==guess){
            dom.output.innerHTML="Congratulations! "+guess+" is correct!";
        }
    
        if (playersGuess>guess){
            dom.output.innerHTML="Answer is less than "+ playersGuess +", you have "+(clickLimit-clickCount)+" tries remaining";
        }
    
        if (playersGuess<guess){
            dom.output.innerHTML='Answer is greater than '+ playersGuess +", you have "+(clickLimit-clickCount)+" tries remaining";
        }
        console.log(dom.output.innerHTML)
    }
});

