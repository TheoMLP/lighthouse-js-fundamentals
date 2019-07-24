//conditional statements 
//if else if else 

if (/* this expression is true */) {
  // run this code
}
else if (/* this expression is true*/) {
  //run this code
}
else {
  // run this code
}

var fruit = 'orange'
if (fruit.length > 5) {
  console.log("The fruit name has more than five characters")
}
else {
  console.log("The fruit name has five characters or less")
}

var weather = 'sunny' 

if (weather = 'snow') {
  console.log('Bring a coat.')
}
else if (weather = 'rain') {
  console.log('Bring a rain jacket.')
}
else {
  console.log('Wear what you have on.')
}

var runner = 'kendyll'
var position = 2 
var medal 

if (position === 1) {
  medal = 'gold' 
}
else if (position === 2) {
  medal = 'silver'
}
else if (position === 3) {
  medal = 'bronze'
}
else {
  medal = 'pat on the back'
}

console.log(runner + ' received a ' + medal + ' medal!') 

var number = 2 

if (number % 2 === 0) {
  console.log("even")
}
else {
  console.log("odd")
}

var musicians = 1 

if (musicians <= 0) {
  console.log("not a group")
}
else if (musicians === 1) {
  console.log("solo")
}
else if (musicians === 2) {
  console.log("duet")
}
else if (musicians === 3) {
  console.log("trio")
}
else if (musicians === 4) {
  console.log("quartet")
}
else {
  console.log("this is a large group")
}

var room = 'dining room'
var suspect = 'Mr. Parkes'

var weapon = ""
var solved = false 

if (room === 'dining room' && suspect === 'Mr. Parkes') {
  weapon = 'knife'
  solved = true 
}
else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
  weapon = 'trophy'
  solved = true 
}
else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
  weapon = 'pool stick'
  solved = true
}
else {
  weapon = 'poison'
  solved = true
}

if (solved === true) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!")
}

//logical operators 
// && and || or ! not 
//!true = false 

var balance = 325.00;
var checkBalance = true; 
var isActive = true; 

if (checkBalance === true && isActive === true && balance > 0) {
  console.log("Your balance is $" + balance + ".")
}
else if (checkBalance === true && isActive === false) {
  console.log("Your account is no longer active.")
}
else if (checkBalance === true && isActive === true && balance === 0) {
  console.log("Your account is empty.")
}
else if (checkBalance === true && isActive === true && balance < 0) {
  console.log("Your balance is negative. Please contact bank.")
}
else {
  console.log("Thank you. Have a nice day!")
}

var flavor = 'chocolate'
var vessel = 'bowl'
var toppings = 'peanuts'

if ((flavor === 'chocolate' || flavor === 'vanilla') && (vessel === 'bowl' || vessel === 'cone') && (toppings === 'peanuts' || toppings === 'sprinkles')) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings)
}

var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

// Write your if/else code here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S")
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M")
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L")
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log('XL')
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log('2XL')
}
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    console.log('3XL')
}
else {
    console.log("N/A")
}

//truthy falsy 

//falsy value 
//A value is falsy if it converts to false when evaluated in a boolean context.

if ("") {
  console.log("the value is truthy")
}
else {
  console.log("the value is falsy")
}

//list of falsy values 
//false boolean, null, undefined, "", 0, NaN

//truthy value 
//A value is truthy if it converts to true when evaluated in a boolean context

if (1) {
  console.log("The value is truthy")
}
else {
  console.log("The value is falsy")
}

//ternary operator 

//conditional ? (if condition is true) : (if condition is false )

var isGoing = true 
var color = isGoing ? "red" : "yellow"
console.log(color)

var eatsPlants = true 
var eatsAnimals = true 

var category = eatsPlants && eatsAnimals ? 'omnivore' : eatsAnimals ? 'carnivore' : eatsPlants ? 'herbivore' : undefined 
console.log(category)

//switch statement

var option = 1

switch (option) {
  case 1: 
    console.log("You selected option 1");
    break;
  case 2: 
    console.log("You have selected option 2");
    break; 
  case 3:
    console.log("You have selected option 3");
    break;
  case 4: 
    console.log("You have selected option 4");
    break; 
  case 5:
    console.log("You have selected option 4");
    break
  case 6:
    console.log("You have selected option 6");
}

//default case to a switch statement and it will be 
//executed when none of the values 
//match the value of the switch expression.