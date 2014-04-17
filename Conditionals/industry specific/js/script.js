// Preston Cain 4/17/2014 Conditionals

//Industry Specific
var dpi = prompt("We are calculating the pixels in an image.\nPlease enter the dpi:")
var width = prompt("Please enter the width:")
var height = prompt("Please enter the height:")
var pixels = (width*dpi) * (height*dpi)
if(pixels >= 3000000000){
result = "The pixels in your image is "+pixels
alert(result)
console.log(result)