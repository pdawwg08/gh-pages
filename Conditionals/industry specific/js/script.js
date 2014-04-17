// Preston Cain 4/17/2014 Conditionals

//Industry Specific
var dpi = prompt("We are calculating the pixels in the desired image.\nPlease enter the dpi:");
if(dpi==""){prompt("You forgot to input the dpi!")
}
var width = prompt("Please enter the width:");
var height = prompt("Please enter the height:");
var pixels = (width*dpi) * (height*dpi);
if(pixels >= 3000000){
	result = "You need at least a 3 Megapixel camera to capture this image.";
}else if(pixels >= 1000000){
	result = "You only need a 1 Megapixel camera to capture this image.";
}else{
	result = "You don't need to worry about the resolution of the camera.\nThe image is less than 1 Megapixel";
}
alert(result);
console.log(result);