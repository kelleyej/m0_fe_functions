// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { console.log("Hello, what is your name?") }

askForName()
console.log("Hello, What is your name?");
// Got rid of the function. Can evoke the desired return with a console.log. 
// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }
function addThreeNums(first, second,third){
  return first + second + third;
}
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// Got rid of var sum. Can get the desired output by just having the return statement. 

// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
function makeFreshPesto() {
  console.log(`
    Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper
    Pulse basil and pine nuts
    Add garlic and cheeses
    Slowly pour in oil
    Season
  `);
}

makeFreshPesto();
// Concatenated to join all the strings. 

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

 function average(num1, num2){
  return ((num1 + num2) / 2);
 } 
 console.log(average(3,5));
 // Combined the sum and avg actions to make it one line, instead of having two different actions. 