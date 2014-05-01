// Preston Cain 5/1/2014 Functions

//Circumference
var calcCircum = function(radius){ //create the function
    var circumference = 2*3.14*radius; //calculate the circumference
    return circumference; //return the answer
    }
var circum = calcCircum(4) //call the function
console.log("The circumference of the circle is "+circum) //log it

//Stuff your face
weight = 275;
qualify = (weight > 250) ? "The competitor qualifies for the heavyweight division." :  "The competitor needs to gain some weight!";
console.log(qualify);

//Celsius to Farenheit converter
degrees = 32;
units = "F";
if(units == "C"){
	temp=((degrees * 9)/5)+32;
	console.log("The temperature is "+temp+" degrees Celsius.")
}else{
	temp=((degrees - 32) * 5)/9;
	console.log("The temperature is "+temp+" degrees Fahrenheit.")
}

degrees = 100;
units = "C";
if(units == "C"){
	temp=((degrees * 9)/5)+32;
	console.log("The temperature is "+temp+" degrees Celsius.")
}else{
	temp=((degrees - 32) * 5)/9;
	console.log("The temperature is "+temp+" degrees Fahrenheit.")
}

degrees = 90;
units = "F";
if(units == "C"){
	temp=((degrees * 9)/5)+32;
	console.log("The temperature is "+temp+" degrees Celsius.")
}else{
	temp=((degrees - 32) * 5)/9;
	console.log("The temperature is "+temp+" degrees Fahrenheit.")
}

//Last chance for gas!
mpg = 23;
guage = 60;
capacity = 12;
//“Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
distance=((60/100)*12)*23
gallons=(60/100)*12
if(distance > 200){
	console.log("Yes, you can make it without stopping for gas!")
}else{
	console.log("You only have "+gallons+" gallons of gas in your tank, better get gas now while you can!")
}

//check the login
enteredUsername = "John";
enteredPassword = "Adams";
username = "John";
password = "Hancock";
if(enteredUsername === username && enteredPassword === password){
	console.log("Welcome, "+username+"!")
}else if(enteredUsername != username){
	console.log("User not found. Try again.")
}else{
	console.log("Password does not match our records.")
}

//movie ticket price
time = 7;
age = 56;
if(((age >= 55) || (age < 10)) || (time >= 3 && time <= 5)){
	console.log("The ticket price is $7.00")
}else{
	console.log("The ticket price is $12.00")
}