"use strict";
//Alien colors 3: Turn your if-else chain from excercise 24-25 into an if-else chain.
//Write three versions of thsi program, making sure each message is printed for the appropriate color alien.
let alicolors = "green";
//version 1 of the program.
if (alicolors === "green") {
    console.log("player earned 5 points.");
}
else if (alicolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alicolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//version 2 of the program.
alicolors = "yellow";
if (alicolors === "green") {
    console.log("player earned 5 points.");
}
else if (alicolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alicolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//version 3 of the program.
alicolors = "red";
if (alicolors === "green") {
    console.log("player earned 5 points.");
}
else if (alicolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alicolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
