// Preston Cain 4/17/2014 Conditionals

//Wacky
//prompt for slices
var slices = prompt("We are calculating the number of pies you will need for thanksgiving.\nPlease enter the number of slices per pie:");
//error prevention
if(slices==""){
	var slices = prompt("You forgot to input the number of slices per pie!");
}
//prompt for guests
var guests = prompt("Please enter the number of guests:");
//error prevention
if(guests==""){
	var guests = prompt("You forgot to input the number of guests!");
}
//prompt for fat
var fat = prompt("Please enter how fat you want to be (from 1 to 10):");
//error prevention
if(fat==""){
	var fat = prompt("You forgot to input how fat you want to be (from 1 to 10)!");
}
//humorous alert
if(fat > 10){
	alert("You must really enjoy thanksgiving!");
}
//humerous alert
if(fat < 1){
	alert("You must really hate pie!");
}
if(slices=="" || guests==""){
	alert("You did not answer all questions.");
}
var pies = (guests*fat)/slices;
result = "The number of pies you will need is "+pies;
alert(result);
console.log(result);