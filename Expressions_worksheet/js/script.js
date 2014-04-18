// Preston Cain 4/10/2014 Expression Worksheet

//Dog Years
var age = 5
dog = age * 7
console.log("Sparky is " + age + " human years old which is " + dog + " in dog years.")

//Slice of Pie part 1
var slices = 8
var people = 11
var pizzas = 3
peopleSlices = (pizzas * slices)/people
console.log("Each person ate " + peopleSlices + " slices of pizza at the party.")

//Slice of Pie part 2
sparkySlices = (pizzas * slices)%people
console.log("Sparky got " + sparkySlices + " slices of pizza.")

//Average Shopping Bill
var grocery = [60,73,102,41,65]
total =  grocery[0] + grocery[1] + grocery[2] + grocery[3] + grocery[4]
average = total/5
console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week.")

//Discounts
var price = 27
var discount = 20
var description = "Turtle"
var tax = 7.25
priceWithout = price*(1-(discount/100))
priceWith = priceWithout*(1+(tax/100))
console.log("Your "+description+" was originally $"+price+", but after a "+discount+"% discount, it is now $"+priceWithout+" without tax, and $"+priceWith+" with tax.")

//Prompt and Alert
var width = prompt("We are calculating the area of a rectangle.\nPlease enter the width:")
var height = prompt("Please enter the height:")
var area = width * height
result = "The area of your rectangle is "+area+" square feet"
alert(result)
console.log(result)