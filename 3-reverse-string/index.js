//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it using JavaScript string methods.
Input: A string
Output: Reverse of the string
Usage: node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require("../modules/getargs");
let input = getargs.getStringArg();


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
    console.log('node 3-reverse-string <string>')
}
else {
     
    console.log(input.split('').reverse().join(''));
}




