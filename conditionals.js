const raining = false 
const cold = true

if (raining) {
  console.log("Don't forget your umbrella!")
}
if (cold) {
  console.log("Make sure you pick out a scarf!")
}

console.log("Now you're ready to go outisde!")


if (cold) {
  console.log("Make sure you pick out a scarf!")
}
else {
  console.log("Short sleeves are fine.")
}

const temperature = 17;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!")
}
else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
}
else {
  console.log("Short sleeves are fine.")
}

// && and 
// || or 
// ! not

const isCitizen = true 
const age = 26

if (isCitizen && age > 18) {
  console.log("You are elegible to vote")
}

if (temperature < -40 && temprature > 40) {
  console.log("Maybe going outside is not a great idea")
}

if (!raining) {
  console.log("Leave you umbrella at home")
} 


