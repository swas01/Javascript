const score =400//number 
console.log(score)

//to get 100% sure that it's a number
const balance=new Number(100)
console.log(balance)//[Number: 100]


console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//100.00

const otherNumber = 23.8966
const otherNumber1 = 123.8966
console.log(otherNumber.toPrecision(3))//23.9 it's a string now 
console.log(otherNumber1.toPrecision(3))//124


