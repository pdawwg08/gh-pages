// Preston Cain 4/10/2014 Expressions

//Wacky
var slices = prompt("We are calculating the number of pies you will need for thanksgiving.\nPlease enter the number of slices per pie:")
var guests = prompt("Please enter the number of guests:")
var fat = prompt("Please enter how fat you want to be (from 1 to 10):")
var pies = (guests*fat)/slices
result = "The number of pies you will need is "+pies
alert(result)
console.log(result)