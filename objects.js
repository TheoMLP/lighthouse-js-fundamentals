var umbrella = {
  color: "pink", 
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!"
    }
    else {
      umbrella.isOpen = true
      return "Julia opens the umbrella!"
    }
  }
}
console.log(umbrella.open())

//method: function associated with an object
//properties: information about the object

var umbrella = {
  color: "pink", 
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!"
    }
    else {
      umbrella.isOpen = true 
      return "Julia opens the umbrella!"
    }
  },
  close: function() {
    if (umbrella.isOpen === false) {
      return "The umbrella is already opened!"
    }
    else {
      umbrella.isOpen = false 
      return "Julia closes the umbrella"
    }
  }
};

//data structure that lets you store any types of data and keep track of that data using a "key"
// key: value pairs are separated from each other by commas
// objects are wrapped in {}

//bracket notation

umbrella["color"]

//dot notation 

umbrella.color

//don't use numbers or quotes to start object property name 
//also don't use hyphens or spaces in object property name 

var breakfast = {
  name: "The LumberJack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

var savingsAccount = {
  balance: 1000, 
  interestRatePercent: 1,
  deposit: function(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function(amount) {
    let verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && savingsAccount.balance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function() {
    return "Welcome! \n" + "Your balance is $" + savingsAccount.balance + " and your interest rate is " + interestRatePercent + "%.";
  }
}

console.log(savingsAccount.printAccountSummary);

var facebookProfile = {
  name: "Theo",
  friends: 426,
  messages: ['hey', 'ay', 'hello', 'ok'],
  postMessage: function(message) {
    facebookProfile.messages.push(message)
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1)
  },
  addFriend: function() {
    facebookProfile.friends += 1
  },
  removeFriend: function() {
    facebookProfile.friend -= 1
  }
}

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(object) {
  console.log(object.type + " donuts cost $" + + object.cost + " each")
})

