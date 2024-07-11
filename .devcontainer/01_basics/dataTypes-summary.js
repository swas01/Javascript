// //Primitive: Call by Value 

// //7 types : String,Number,Boolean,Null,undefined,Symbol(to make any value unique),BigInt
// //Javscipt is statically or dynamically typed

// const score=100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// //even if same parameter is passed still Symbol returns different value

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id)//Symbol(123)
// console.log(anotherId)//Symbol(123)

// console.log(id === anotherId)//false

// //const bigNumber = 364728627828n;//n converts the number into bigint

// //Reference Type(Non Primitive)

// //Array,Objects, functions

// //Array
// const heros= ["shaktiman" , "Nagraaj","Doga"]

// //Objects

// let myObj={
//     name:"Swastika",
//     Age:22,
// }
// console.log(myObj)//{ name: 'Swastika', Age: 22 }
// //function declaration//functions can be treated as variables in javascript

// const myFunction= function(){
//     console.log("Hello World");
// }
// //console.log(myFuction)//this will give you reference error
// console.log(typeof myFunction)//function//it will return function but actually it is called object function

// //Know the dataTypes
// console.log(typeof bigNumber)//undefined
// console.log(typeof outsideTemp)//object
// console.log(typeof scoreValue)//number
// console.log(typeof myObj)//object
// console.log(typeof heros)//object
// console.log(typeof anotherId)//symbol
  


//********************************************************************************************************/

// Two types of memory:Stack and heap
/*where they are used 
*primitive value used Stack //this means you'll get a copy of data from here 
*and Non primitive value uses Heap //here you will get the memory reference of actual data 
*/

let myYoutubeName="SwastikaBasak" 

let anotherName=myYoutubeName
anotherName="ChaiaAurCode"
//console.log(anotherName)//SwastikaBasak

console.log(myYoutubeName)//SwastikaBasak
console.log(anotherName)//ChaiAUrCode

let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
}
let userTwo=userOne
userTwo.email= "Swastika@google.com"
console.log(userOne.email)//Swastika@google.com
console.log(userTwo.email)//Swastika@google.com