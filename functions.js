
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE

function sum (num1, num2) {
  let add = num1 + num2
  return add
}

let x = 2
let y = 5

console.log(sum(x,y))




//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE

function greaterThanFive (number) {
  let = isGreater = false

  if(number > 5) {
    isGreater = true
    return isGreater
  } else if (number < 5) {
    isGreater = false
    return isGreater
  } else {
    isGreater = false
    return isGreater
  }
}

console.log(greaterThanFive(4))

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE

function findZWords (word) {
  if(word[0] === "Z") {
    return "This name begins with a Z"
  } else {
    return "This name does not begin with a Z"
  }
}

console.log(findZWords("Zack"))

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove (name, love) {
  console.log(`${name} loves ${love}`)
}

iLove("Elijah", "music")
