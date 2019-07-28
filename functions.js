function reverseString(reverseMe) {
  let reversed = ""
  for (let i = reverseMe.length - 1; i >= 0; --i) {
    reversed += reverseMe[i]
  }
  return reversed
}

console.log('Hi my name is ' + reverseString("Julia") + ", Hi I'm " + reverseString("James") + ".")

function greeting(greeting, firstName) {
  `${greeting} + ${firstName}`
}

function greeting2(language) {
  if (language === 'es') {
    return 'Hola'
  }
  else if (language === 'fr') {
    return 'Bonjour'
  }
  else if (language === 'pt') {
    return 'obrigado'
  }
  else {
    return 'Hello'
  }
}

console.log(greeting2('fr') + " Maria")

function sayHello() {
  let message = 'hello'
  return message
}
console.log(sayHello())

function findAverage(x, y) {
  let average = (x + y) / 2
  return average 
}
console.log(findAverage(5, 9))

//Functions package up code, reusability of a block of code
//parameters : variables used to store the data passed to the function 
//arguments : data passed to the function

function add(x, y) {
  let sum = x + y
  return sum
}
console.log(add(1, 2))

function laugh(num) {
  let laugh = ""
  while (num > 0) {
    laugh += "ha"
    --num
  }
  return laugh + "!"
}
console.log(laugh(7))

//return : use ot stop execution of a function and return a value back to the caller

function isPrime(integer) {
  for (x = 2; x < integer; x += 1) {
    if (integer % x === 0) {
      console.log(integer % x === 0)
      return false
    }
  }
  return true
}

//scope 

//global scope 
//identifiers can be accessed everywhere within your program

//function scope 
//identifiers can only be accessed inside the function it was defined in and within the functions defined in that function 

//When trying to access an identifier, 
// the JavaScript Engine will first look in the current function.
// If it doesn't find anything, 
// it will continue to the next outer function to see 
// if it can find the identifier there. 
// It will keep doing this until it reaches the global scope.

//shadowing scope overwriting 
//if a new function scope variable is not declared it will overwrite the global variable

//hoisting

//JavaScript hoists function declarations and variable declarations to the top of the current scope.
//Variable assignments are not hoisted.
//Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.

//double loop 
//length going from 1 to length 

function makeLine(length) {
  let line = "" 
  for (var j = 1; j <= length; j += 1) {
    line += "* "
  }
  return line + "\n\ "
}

function buildTriangle(width) {
  let triangle = ""
  for (let length = 1; length <= width; length += 1) {
    triangle += makeLine(length)
  }
  return triangle
}
console.log(buildTriangle(13))

// Function Expression: When a function is assigned to a variable
// The function can be named, or anonymous

/* All function declarations are hoisted and loaded before the script
is actually run. Function expressions are not hoisted, 
since they involve variable assignment, 
and only variable declarations are hoisted. */


var catSays = function(max) {
  let catMessage = ""
  for (let x = 0; x < max; x += 1) {
    catMessage += "meow "
  }
  return catMessage 
}

function helloCat(callBackFunc) {
  return "Hello " + callBackFunc
}

console.log(helloCat(catSays(4)))

var favoriteMovie = function displayFavorite(name) {
  console.log("My favorite movie is " + name)
}

function movie(messageFunc, name) {
  messageFunc(name)
}

movie(favoriteMovie, "finding Nemo")

var cry = function crying() {
  return "boohoo!"
}
console.log(cry())

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2))
}

function laugh(num) {
  let laugh = ""
  for (let x = 1; x <= num; x += 1) {
    laugh += "ha"
  }
  return laugh + "!"
}

emotions("happy", laugh(3))
emotions("happy", function laugh(num) {
  let laugh = ""
  for (let x = 1; x <= num; x += 1) {
    laugh += "ha"
  }
  return laugh + "!"
})

//inline function 