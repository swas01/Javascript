const score =400//number 
// console.log(score)

//to get 100% sure that it's a number
const balance=new Number(100)
// console.log(balance)//[Number: 100]


// console.log(balance.toString().length)//3
// console.log(balance.toFixed(2))//100.00

const otherNumber = 23.8966
const otherNumber1 = 123.8966
// console.log(otherNumber.toPrecision(3))//23.9 it's a string now 
// console.log(otherNumber1.toPrecision(3))//124 //can be used where you r sure about the number of digits before decimal

const hundreds= 1000000
// console.log(hundreds.toLocaleString());//1,000,000 (By default US standard)
// console.log(hundreds.toLocaleString('en-IN'))//10,00,000 (Indian Standard)


//*************************************************  Maths  **************************************************************/

console.log(Math)//Object [Math] {}

// console.log(Math.abs(-4))//4
// console.log(Math.round(4.3))//4
// console.log(Math.round(4.6))//5
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.6))//4
// console.log(Math.sqrt(4))//2
// console.log(Math.pow(2,3))//8

// console.log(Math.min(2,3,4,5,6))//2
// console.log(Math.max(3,4,5,6))//6

//to get a random value between 0 and 1(highly used)
console.log(Math.random())//0.21619625392651232
console.log(Math.random())//0.09303696812786377
console.log(Math.random()*10)//6.8874616215246505 to get a value equal and greater than 0
console.log((Math.random()*10)+1)//5.938623757651454 to get a value between 1 to 10
console.log(Math.floor(Math.random()*10)+1)//8 to avoid decimal points

const min=10
const max=20
// +min to have the minimum number and +1 to avoid 0
console.log(Math.floor(Math.random()*(max-min+1))+min)//(got a value between 10 and 20)  

