// Preston Cain 4/17/2014 Conditionals

//Personal
var diaperDaily = prompt("We are calculating how many diaper boxes you will use in a year.\nPlease enter the number of diapers you use per day:")
if(diaperDaily==""){
	var diaperDaily = prompt("You forgot to input the number of diapers you use per day!")
}
var box = prompt("Please enter the number of diapers are in a box of your favorite brand:")
if(box==""){
	var box = prompt("You forgot to input the number of diapers in a box!")
}
var diaperTotal = diaperDaily*365
if(diaperDaily==0 || box==0){
	var diaperBoxes=0
}else{
	var diaperBoxes = diaperTotal/box
}
(diaperBoxes==0) ? result = "You do not need to buy any diapers.\nYou must not have a baby!": result = "The number of boxes you will use in a year is "+diaperBoxes;

alert(result)
console.log(result)