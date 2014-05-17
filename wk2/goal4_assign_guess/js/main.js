/**
 * GUESSING GAME:
 *
 * Created By: Preston Cain
 * Date: May 16th 2014
 * 
 * GUESSING GAME
 */

//Game variables
var guess=Math.round(Math.random()*(9)+1);
var dom = {
    input: document.querySelector("#input"),
    output: document.querySelector("#output"),
    button: document.querySelector("button")
}
