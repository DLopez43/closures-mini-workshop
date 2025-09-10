/*
Prompt:
Write a function `saveOutput` that takes in a function (func) and a string (magicWord).
It should return a new function that behaves as follows:

- Every time the returned function is invoked with an argument,
  it should return the result of calling `func` on that argument.
- It should also save each argument and its corresponding output in an object.
- When the returned function is invoked with the magicWord,
  it should return the object with all previously saved inputs and outputs.

Example:
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndSave = saveOutput(multiplyBy2, "showAll");

multBy2AndSave(5);        // 10
multBy2AndSave(10);       // 20
multBy2AndSave("showAll") // {5: 10, 10: 20}
*/

/*
  define success  -->  create an obj cache ; return the cache
  key phrases
    --> input for outer function --> takes in a function (func) and a string
    --> output for outer function -->  return a new function
    --> output for inner function 
      -->  create an obj cache  OR  return the cache (string is magicWord)
  match to actions
    --> create a conditional to search for magic word
    --> if no magic word, add to the cache (Key: string, Value: function acting on the string)
  strategy (optional)
*/

// LMAOOOOOO --> too much chatting - LOL does
// IT WORKSSSS !!! YAY 
function saveOutput(func, magicWord) {
  // your code here
  const cache = {};

  return function (input) {
    if (input === magicWord) return cache;
    
    cache[input] = func(input);
    return cache[input]
  }
}

/*
Examples:
We’ve included a few starter calls in `runExamples()`.
- Uncomment `runExamples();` at the bottom to try them out.
- Add one of your own before unlocking with the magic word.
*/

function runExamples() {
  const multiplyBy2 = (n) => n * 2;
  const multBy2AndSave = saveOutput(multiplyBy2, "showAll");

  console.log(multBy2AndSave(5));        // -> 10
  console.log(multBy2AndSave(10));       // -> 20

  // TODO: Add ONE additional example call of your own, then unlock:
  console.log(multBy2AndSave(7));  // -> 14
  console.log(multBy2AndSave("showAll")); // -> {5: 10, 10: 20 /* , 7: 14 if you added it */}
}
runExamples();
