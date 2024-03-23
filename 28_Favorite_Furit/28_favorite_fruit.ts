/*Favorite Fruits: Make a array of your favorite fruits, and then write a series of independent if statements that check
for certain fruits in your array.*/
//Make a array of your three favorite fruits and call it favorite_furits.
/*Write five if statements. Each should check whether a certain kind of fruit is in your array. if the fruit is in your
array, the if block should print a statement, such as you really like bananas!*/

let favorite_furits: string[]= ['apple', 'banana', 'mango'];

if(favorite_furits.includes('apple')){  
    console.log('I really like apple!');
}

if(favorite_furits.includes('banana')){
    console.log('I really like banana!');
}

if(favorite_furits.includes('mango')){
    console.log("I really like mango");
}

if(favorite_furits.includes('peach')){
    console.log('I really like peach!');
}


if(favorite_furits.includes('strawberry')){
    console.log('I really like strawberry');
}
else{
    console.log('Sorry..The fruit you selected is not present in array!');
}

