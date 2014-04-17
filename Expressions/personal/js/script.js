// Preston Cain 4/17/2014 Conditionals

//Personal
//prompt for diapers
var diaperDaily = prompt("We are calculating how many diaper boxes you will use in a year.\nPlease enter the number of diapers you use per day:");
//prevent errors
if(diaperDaily==""){
	var diaperDaily = prompt("You forgot to input the number of diapers you use per day!");
}
//prompt for diapers in a box
var box = prompt("Please enter the number of diapers are in a box of your favorite brand:");
//prevent errors
if(box==""){
	var box = prompt("You forgot to input the number of diapers in a box!");
}
var diaperTotal = diaperDaily*365;
//prevent errors
if(diaperDaily==0 || box==0){
	var diaperBoxes=0;
}else{
	var diaperBoxes = diaperTotal/box;
}
(diaperBoxes==0) ? result = "You do not need to buy any diapers.\nYou must not have a baby!": result = "The number of boxes you will use in a year is "+diaperBoxes;

alert(result);
console.log(result);