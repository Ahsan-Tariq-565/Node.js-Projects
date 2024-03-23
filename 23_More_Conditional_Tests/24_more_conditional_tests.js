"use strict";
//Equality Tests 1
console.log("Equality test with strings: ", "Apple" === "Apple");
console.log("Equality test with strings: ", "apple" === "Apple");
console.log('\n');
//Inequality Tests 
console.log("Inequality test with strings: ", "Apple" !== "Orange");
console.log("Inequality test with strings: ", "car" !== "car");
console.log("\n");
//Test using the lower case function 
console.log("Lower case function tests: ", "Hello".toLowerCase() === "hello");
console.log("Lower case function tests: ", "AHSAN".toLowerCase() === "Ahsan");
console.log("\n");
//Numerical involving equality test.
console.log("Equality test with numbers: ", 26 === 26);
console.log("Equality test with numbers: ", 26 === 35);
console.log("\n");
//Numerical invoving Inequality test
console.log("Inequality test with numbers: ", 26 !== 28);
console.log("Inequality test with numbers: ", 46 !== 46);
console.log("\n");
//Greater then test
console.log("Greater than tests: ", 10 > 5);
console.log("Greater than tests: ", 3 > 5);
console.log("\n");
//Less then test
console.log("less then tests: ", 5 < 25);
console.log("less then tests: ", 6 < 5);
console.log("\n");
//Greater than or equal to.
console.log("Greater than or equal to: ", 10 >= 10);
console.log("Greater than or equal to: ", 20 >= 54);
console.log("\n");
//Less than or equal to.
console.log("Less than or equal to: ", 5 <= 10);
console.log("Less than or equal to: ", 92 <= 54);
console.log("\n");
//Test using "and" operator.
console.log("And operator test: ", 5 === 5 && 10 > 5);
console.log("And operator test: ", 6 === 6 && 9 > 25);
console.log("\n");
//Test using "or" operator.
console.log("And operator test: ", 5 === 5 || 10 > 5);
console.log("And operator test: ", 6 === 8 || 9 > 25);
console.log("\n");
//Test whether an item is in a array.
const fruits = ['Apple', 'Peach', 'Mango'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
//Test whether an item is not in a array.
console.log('Test "Apple" in the array: ', fruits.includes("Banana"));
console.log("\n");
