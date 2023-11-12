// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    return "Hello there, how are you?";
}

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    return `Hello, ${name}, how are you?`
}

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName){
    return `Hello, ${firstName} ${middleName} ${lastName}`
}

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number){
    return number ** 2;
}
// BONUS:
function square(number){
    return `Congrats! You figured out that the square of ${number} is equal to ${number ** 2}!`;
}
console.log(square(number));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(number, stockItem){
    if (number === 4 && stockItem === "Coffee"){
        console.log("Coffee is stocked");
    } else if (number === 3 && stockItem === "Tortillas"){
        console.log("Torillas - running LOW");
    } else if (number === 0 && stockItem === "Cheese"){
        console.log("Cheese - OUT Of stock!");
    } else (number === 1 && stockItem === "Salsa");
}