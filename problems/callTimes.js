/*
Prompt:
Write a function `callTimes` that returns a new function.
Each time the returned function is invoked, it should return the number of times it has been called.

Example:
const myFunc = callTimes();
myFunc(); // 1
myFunc(); // 2
*/

//Approach
//Define Success: Success would be returning a number of how many times the function has been invoked
//Key phrases: Return new function, and return number of times it has been called
//count --> Gets updated every time it gets invoked

function callTimes() {
  // your code here
  let counter = 0;//create count
  return () => {//inner function
  counter++;//updates count
  return counter;//returns count
  }
}
const rose = callTimes();
console.log(rose())
console.log(rose())
console.log(rose())

const delilah = callTimes();
console.log(rose())
console.log(delilah())
/*
Examples:
Some sample calls are provided inside `runExamples()`.
- Uncomment `runExamples();` at the bottom to try them out.
- Add one of your own checks to confirm your solution works.
*/

function runExamples() {
  const myFunc = callTimes();
  console.log(myFunc()); // -> 1
  console.log(myFunc()); // -> 2

  // TODO: Add ONE additional check of your own:
  // e.g., console.log(myFunc()); // -> 3
  // Or create an independent counter:
  const another = callTimes();
  console.log(another()); // -> 1
  console.log(myFunc())
}

runExamples();
