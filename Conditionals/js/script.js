// Preston Cain 4/17/2014 Expressions

//Stuff your face
weight = 275;
qualify = (weight > 250) ? "The competitor qualifies for the heavyweight division." :  "The competitor needs to gain some weight!";
console.log(qualify);

//Celsius to Farenheit converter
degrees = 63;
units = "C"
if(units == "C"){
	temp=((degrees * 9)/5)+32;
	console.log("The temperature is "+temp+" degrees Celsius.")
}else{
	temp=((degrees - 32) * 5)/9;
	console.log("The temperature is "+temp+" degrees Fahrenheit.")
}