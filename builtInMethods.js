// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// Returns 'hello world'
// Lowercases all letters that exist in the string. 

"Hello World".includes("Hello");
// Returns with the boolean true. 
// Stating that it is true the word "Hello" is in the string. 

"Hello World".endsWith("Hello");
// Returns with the boolean false. 
// Denies that the existing string ends with "Hello".

"Hello World".endsWith("rld");
// Returns with the boolean true. 
// Stating that the existing string ends with at least the three letters of "rld".


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.
var lastName = "Kelley";
var favAnimal = "Penquin";
lastName.startsWith("Kel");
// Returns the boolean true. 
// States that the string assigned to the lastName variable at least starts with "Kel".
favAnimal.toUpperCase();
// Returns 'PENQUIN'.
// Uppercases all letters that exist in the string. 


// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
var catNames = ["Squash", "Olive", "Pickles"];
var dogNames = ["Rupert", "Emmett", "Josie"];
dogNames.slice(1,2);
// Returns 'Emmett'.
// The slice method starts with element 1 and ends with element 2 (however, does NOT include element 2).
catNames.unshift("Maggie");
// Returns the new number of elements (4) and adds the string "Maggie" to the beginning of the array. 
// Should return 4 and may need to then console.log to return ['Maggie', 'Squash', 'Olive', 'Pickles']. 