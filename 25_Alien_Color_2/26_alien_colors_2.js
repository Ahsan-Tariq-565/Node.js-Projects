"use strict";
// Alien Color #2: Choose a color for an alien as you did in excercise 24.
let alienColors = 'green';
// Write an if-else chain.
//If the alien's color is green print a statement that the player just earned 5 points for shooting the alien.
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
// If the alien's color isn't green, print a statement that the player just earned 10 points.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
