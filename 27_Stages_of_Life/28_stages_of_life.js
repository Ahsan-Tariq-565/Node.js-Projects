"use strict";
//Stages of life: write an if -else chain that determines a person's stage of life.
//set a value for the variable age.
let age = 25;
//if the person is less than 2 years old, print a message that person is a baby.
//if the person is at least 2 years old, but less than 4, print message "the person is toolder."
//if the person is at least 4 years old, but less than 13, print message "the person is kid."
//if the person is at least 13 years old, but less than 20, print message "the person is teenager."
//if the person is at least 20 years old, but less than 65, print message "the person is adult."
//if the person age is 65 years old, print message "the person is elder."
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
}
else {
    console.log("person is an elder.");
}
