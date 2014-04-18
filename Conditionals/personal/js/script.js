// Preston Cain 4/10/2014 Expressions

//Personal
var diaperDaily = prompt("We are calculating how many diaper boxes you will use in a year.\nPlease enter the number of diapers you use per day:")
var box = prompt("Please enter the number of diapers are in a box of your favorite brand:")
var diaperTotal = diaperDaily*365
var diaperBoxes = diaperTotal/box
result = "The number of boxes you will use in a year is "+diaperBoxes
alert(result)
console.log(result)