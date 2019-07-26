//loop main conditions 
//when to start when to stop and how to get to the next step 
// starting point, ending point, increment or decrement

for (x = 0; x <= 100; x += 1) {
  console.log(x + ' mississppi')
}

var x = 1 
while (x <= 100) {
  console.log(x + ' mississippi')
  x = x + 1
}

var start = 0;
while (start < 10) {
  console.log(start)
  start = start + 2
}

var n = 1
while (n <= 20) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('JuliaJames')
  }
  else if (n % 3 === 0) {
    console.log('Julia')
  }
  else if (n % 5 === 0) {
    console.log('James')
  }
  else {
    console.log(n)
  }
  n = n + 1
}

var num = 99 

while (num >= 0) {
  let num2 = num - 1
  if (num === 2) {
    console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+num2+" bottle of juice on the wall!")
  }
  else if (num === 1) {
    console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around... "+num2+" bottles of juice on the wall!")
  }
  else if (num > 2) {
    console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+num2+" bottles of juice on the wall!")
  }
  num--
}


var seconds = 60
while(seconds >= 0) { 
  if (seconds === 50) {
    console.log("Orbiter transfers from ground to internal power")
  }
  else if (seconds === 31) {
    console.log("Ground launch sequencer is go for auto sequence start")
  }
  else if (seconds === 16) {
    console.log("Activate launch pad sound suppression system")
  }
  else if (seconds === 10) {
    console.log("Activate main engine hydrogen burnoff system")
  }
  else if (seconds === 6) {
    console.log("Main engine start")
  }
  else if (seconds === 0) {
    console.log("Solid rocket booster ignition and liftoff!")
  }
  else {
    console.log("T-"+ seconds +" seconds")
  }
  seconds--
}

//for (start; end; step) {do this}

for (var i = 0; i < 6; i += 1) {
  console.log("Printing at i = " + i);
}

//nested loop
//For each value in the outer loop, the inner for loop executes completely

for (x = 0; x < 4; x += 1) {
  for (y = 0; y < 5; y += 1) {
    console.log(x + ", " + y)
  }
}

//increment & decrement 

//x++ ++x  x = x + 1
//x-- --x  x = x - 1 
// x += 3  x = x + 3
// x -= 6  x = x -6 
// x *= 2  x = x * 2
// x /= 3  x = x / 3

for (var x = 9; x >= 0; --x) {
  console.log("Hello " + x) 
}

let solution = 1 
for(var i = 1; i <= 12; ++i) {
  solution *= i 
}
console.log(solution)

for (x = 0; x <= 25; ++x) {
  for (y = 0; y <= 99; ++y) {
    console.log(x + "-" + y)
  }
}
