// Preston Cain 4/17/2014 Conditionals

//Industry Specific

//prompt for pixels
var dpi = prompt("We are calculating the pixels in the desired image.\nPlease enter the dpi:");
//error prevention
if(dpi==""){
	var dpi = prompt("You forgot to input the dpi!");
}
//prompt for width
var width = prompt("Please enter the width:");
//error prevention
if(width==""){
	var width = prompt("You forgot to input the width!");
}
//prompt for height
var height = prompt("Please enter the height:");
//error prevention
if(height==""){
	var height = prompt("You forgot to input the height!");
}
//calculate pixels
var pixels = (width*dpi) * (height*dpi);
//if over 5 megapixels show alert, if over 3 megapixels show different alert, if over 1 megapixel show third alert, and if under 1 megapixel show fourth alert
if (pixels >= 5000000){
	result = "You need at least a 5 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else if(pixels >= 3000000){
	result = "You need at least a 3 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else if(pixels >= 1000000){
	result = "You only need a 1 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else{
	result = "You don't need to worry about the resolution of the camera.\nThe image is less than 1 Megapixel\nThere are "+pixels+" pixels in this image";
}
alert(result);
console.log(result);