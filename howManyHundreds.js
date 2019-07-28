function howManyHundreds(num) {
  let extra = num % 100 
  let result = (num - extra) / 100 
  return result
}

console.log(howManyHundreds(1000), "=?", 10)
console.log(howManyHundreds(894), "=?", 8)
console.log(howManyHundreds(520), "=?", 5)
console.log(howManyHundreds(99), "=?", 0)
console.log(howManyHundreds(0), "=?", 0)


