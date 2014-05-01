// Preston Cain 5/1/2014 Functions

//Personal

var copyPrompt = function(measurement){
    var unit = prompt("We are calculating how many diaper boxes you will use in a year.\nPlease enter the number of "+measurement+":"); //generic prompt
    if(unit==""){
	var unit = prompt("You forgot to input the "+measurement+"!"); //alert
} //if first prompt is empty
    return unit; //return what the user put in the prompt
}

//prompt for diapers
var diaperDaily = copyPrompt("diapers you use per day");

//prompt for diapers in a box
var brand = copyPrompt("diapers are in a box of your favorite brand:");

//calculate
function diaperCalc(daily,box){
    var diaperTotal = daily*365;
    //prevent errors, otherwise continue calculation
    if(daily==0 || box==0){
	   var diaperBoxes=0;
    }else{
	   var diaperBoxes = diaperTotal/box;
    }
    return diaperBoxes;
}
boxes = diaperCalc(diaperDaily,brand)
//ternary to display in case of error
(boxes==0) ? result = "You do not need to buy any diapers.\nYou must not have a baby!": result = "The number of boxes you will use in a year is "+boxes;

alert(result);
console.log(result);