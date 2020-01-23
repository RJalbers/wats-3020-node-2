/*
Description:an adaptation of the FizzBuzz algorithm but with a function.
Input:An integer
Output: A list of numbers, with fizz is divisible by 3, buzz iff divisble by 5, and fizzbuzz if divisible by both
Usage: usage node 2-fizzbuzz-fun <integer>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(i){
// TODO provide for tests for divisible for 3,5, and 15 to return desired output
if (i % 15 == 0 ) {
  return 'fizzbuzz';
} else if (i % 3 == 0 ) {
  return 'fizz';
} else if (i % 5 == 0 ) {
  console.log(`${i} buzz`);
} else {
  return '';
}

}

// TODO check if input is not an integer
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage node 2-fizzbuzz-fun <integer>")
}
else {
  // TODO provide info to for loop to iterate from 1 to value of input
  for ( let i = 1; i <= input; i++ ) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}


