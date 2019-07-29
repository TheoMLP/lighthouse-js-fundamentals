//Array
//Data structure used to store multiple values in an organized manner

var donuts = ["glazed", "chocolate frosted", "cinnamon", "sprinkled", "powdered"];

//nested arrays

let arraysInArrays = [
  [1, 2, 3], 
  ['Julia', 'James'], 
  [true, false, true, false]
];

//element piece of data in array
//index : position of an element in an array starting at 0

console.log(donuts[0])

//change element value using index 
donuts[3] = 'chocolate holes'
console.log(donuts[3])

let udaciFamily = ["Julia", "James", "Theo"]
console.log(udaciFamily)

let prices = [1.23, 49.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00]
prices[0] = 2.30 
prices[2] = 120.33
prices[6] = 44.44

console.log(prices)

//property: special information about a data structure
//length property of an array

//methods: special functions that apply to arrays

//length : find lenght of an array using length property

console.log(donuts.length)

//push : use the push() method to add elements to the end of an array.

donuts.push("Boston creme")

//pop : pop() method to remove elements from the end of an array.

donuts.pop()

//splicd : allows you to add and remove elements from anywhere within an array.
//first argument: starting index from where you want to change the array
//second argument: number of element you want to remove from that index 
//remaining arguments: elements you want to add

donuts.splice(1, 1, "chocolate cruller", "creme de leche")

let rainbow = ["Red", "Orange", "Blackberry", "Blue"]
rainbow.splice(2, 1, "Yellow", "Green")
rainbow.splice(5, 0, "Purple")
console.log(rainbow)

let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"]
function hasEnoughPlayers(array) {
  if (array.length >= 7) {
    return true
  }
  else {
    return false
  }
}
console.log(hasEnoughPlayers(team))

let crew = ["captain", "second", "pilot", "companion", "mercenary", "mechanic"]
console.log(crew)

crew.push("doctor")
crew.push("sister")
crew.push("shepherd")

console.log(crew)

//reverse, join, sort, slice : makes a copy 

//loops and array 

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (var i = 0; i < donuts.length; i += 1) {
  donuts[i] = donuts[i] + " hole";
  donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts)

var donuts = ["jelly donut", "chocolate donut", "glazed donut"]

//forEach() loop

array = [1, 2, 3, 4]

function myAwesomeFunction(element, index, array) {
  console.log("Element: " + element);
  console.log("Index: " + index);
  console.log("Array: " + array);
}

array.forEach(myAwesomeFunction);

function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase()
  console.log(donut)
}

donuts.forEach(printDonuts);

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase()
  console.log(donut)
})

words = ["cat", "in", "hat"] 
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.join() + " is " + word)
})


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(num, index, array) {
  if (num % 3 === 0) {
    array[index] = num + 100
  }
})
console.log(test)

test.forEach(function(num, index, array) {
  if (num % 3 === 0) {
    num += 100 
    array.splice(index, 1, num)
  }
})
console.log(test)

//map : returns a new array

var donuts = ["jelly donut", "chocolate donut", "glazed donut"] 

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase()
  return donut
})

console.log(donuts)
console.log(improvedDonuts)

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(bill) {
  bill *= 1.15
  return Number(bill.toFixed(2))
})
console.log(totals)

//arrays in arrays and loops in loops 

var grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]

for (var r = 0; r < grid.length; r += 1) {
  for (var c = 0; c < grid[r].length; c += 1) {
    console.log(grid[r][c])
  }
}

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row += 1) {
  for (var column = 0; column < donutBox[row].length; column += 1) {
    console.log(donutBox[row][column])
  }
}

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var row = 0; row < numbers.length; row += 1) {
  for (var column = 0; column < numbers[row].length; column += 1) {
    if (numbers[row][column] % 2 === 0) {
      numbers[row][column] = "even"
    }
    else {
      number[row][column] = "odd"
    }
  } 
}
console.log(numbers)

