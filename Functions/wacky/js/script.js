// Preston Cain 5/1/2014 Functions

//Wacky
var copyPrompt = function(measurement){
    var unit = prompt("We are calculating the number of pies you will need for thanksgiving.\nPlease enter "+measurement+":"); //generic prompt
    if(unit==""){
	var unit = prompt("You forgot to input "+measurement+"!"); //alert
} //if first prompt is empty
    return unit;
}

//prompt for slices
var slices = copyPrompt("the number of slices per pie");

//prompt for guests
var guests = copyPrompt("the number of guests");

//prompt for fat
var fat = copyPrompt("how fat you want to be (from 1 to 10)");

//humorous alert
if(fat > 10){
	alert("You must really enjoy thanksgiving!");
}
//humerous alert
if(fat < 1){
	alert("You must really hate pie!");
}
//error prevention
if(slices=="" || guests==""){
	alert("You did not answer all questions.");
}
//calculation
var pies = (guests*fat)/slices;
//form alert
result = "The number of pies you will need is "+pies;
//display alert
alert(result);
//show result in log
console.log(result);