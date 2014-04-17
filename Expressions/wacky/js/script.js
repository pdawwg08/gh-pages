// Preston Cain 4/17/2014 Conditionals

//Wacky
var slices = prompt("We are calculating the number of pies you will need for thanksgiving.\nPlease enter the number of slices per pie:")
if(slices==""){
	var slices = prompt("You forgot to input the number of slices per pie!");
}
var guests = prompt("Please enter the number of guests:")
if(guests==""){
	var guests = prompt("You forgot to input the number of guests!");
}
var fat = prompt("Please enter how fat you want to be (from 1 to 10):")
if(fat==""){
	var fat = prompt("You forgot to input how fat you want to be (from 1 to 10)!");
}
if(fat > 10){
	alert("You must really enjoy thanksgiving!")
}
var pies = (guests*fat)/slices
result = "The number of pies you will need is "+pies
alert(result)
console.log(result)