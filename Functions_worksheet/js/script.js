// Preston Cain 5/1/2014 Functions

//Circumference
var calcCircum = function(radius){ //create the function
    var circumference = 2*3.14*radius; //calculate the circumference
    return circumference; //return the answer
    }
var circum = calcCircum(4); //call the function
console.log("The circumference of the circle is "+circum) //log it

//Stung!
var stingers = function(weight){ //create the function
    var stings = weight*8.666666667; //calculate the stings
    return stings; //return the answer
}
var killing = stingers(135); //call the function
console.log("It takes "+killing+" bee stings to kill this animal") //log it