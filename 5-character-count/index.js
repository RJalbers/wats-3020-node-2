//TODO fill in comment template
/*
Description: A program that takes a string as input and counts how many of each character are in that string.
Input: String
Output: String
Usage: node 5-character-count <string>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
  console.log('usage: node 5-character-count <string>')
}
else {
  let charCount = {};
  let characters = input.split('')

  for (let character of characters){
   if (charCount[character]) {
     charCount[character]++;
   } else {
    charCount[character] = 1;
   }
   
  }


  
  let charArr = [];
  for (let character in charCount) {
    let newElem = {char:character, count:charCount[character]};
    charArr.push(newElem);
  }

  charArr.sort(function(a , b) {
    return a.count - b.count
  })

  for(let i = 0; i < charArr.length; i++) {
    console.log(`${charArr[i].char}: ${charArr[i].count}`)
  }
 
}

