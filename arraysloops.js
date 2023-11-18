let studentNames = ["Susan", "Shehu", "Seyi"];

// console.log(studentNames[0]);
// console.log(studentNames[1]);
// console.log(studentNames[2]);

// studentNames.push("Tim");
// console.log(studentNames);

studentNames.forEach((studentName) => {
  console.log(studentName);
});
/*
forEach Method:
forEach is a method that arrays have, which allows you to run a function for each element in the array.
It takes a function as an argument and calls that function once for each element in the array, in order.
callback Function:
function(studentNames) { console.log(studentNames); } is a function that will be executed for every single element in the studentNames array. It is often referred to as a "callback function" because it is called back by the forEach method for every array element.
The parameter studentNames represents the current element being processed in the array. It will take on the value of each array element, one at a time, as forEach iterates through the array.
Executing the Logic:
console.log(studentNames);: This line of code is executed for each element in the array. It logs the current element (studentNames) to the console.
The forEach method will execute the callback function once for each element in the studentNames array, in order. Here's the step-by-step walkthrough:

Iteration 1: studentNames is "Susan". The callback function logs: Susan.
Iteration 2: studentNames is "Shehu". The callback function logs: Shehu.
Iteration 3: studentNames is "Seyi". The callback function logs: Seyi.

*/

//for loopss
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]);
}

/*
Initialization of Loop Variable:
let i = 0;: The loop starts by declaring a variable i and initializing it with the value 0. This variable is often referred to as the loop counter.
Condition for Continuing the Loop:
i < studentNames.length;: This condition is checked before each iteration of the loop. If it evaluates to true, the loop continues; if false, the loop ends. studentNames.length provides the number of elements in the studentNames array
Incrementing the Loop Variable:
i++: After the block of code within the loop is executed, i++ increments the value of i by 1. This means, in the next iteration, the loop will operate with the next index of the array.
Executing the Block of Code:
console.log(studentNames[i]);: The block of code inside the loop (enclosed by the curly braces {}) is executed for each iteration. studentNames[i] accesses the element at index i of the studentNames array, and console.log outputs it to the console
Here’s a step-by-step walkthrough of how the loop works:

Iteration 1: i is 0. studentNames[0] is "Susan". Logs: Susan.
Iteration 2: i is 1. studentNames[1] is "Shehu". Logs: Shehu.
Iteration 3: i is 2. studentNames[2] is "Seyi". Logs: Seyi.

*/
