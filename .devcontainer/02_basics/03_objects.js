//Objects can be made by two types:i.literal 2.constructor

/*
when objects are created from literal it will not create singletone object
when objects are created from constructor it will create singleton object
*/

//objects literal

//const JUser={}//empty object
const mySym=Symbol("key1")
const JUser ={
    name : "Swastika",
    age:21,
    location:"Kolkata",
    email:"swastika@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"mykey1"

}
//How can you access the object?

console.log(JUser.email)//swastika@google.com
console.log(JUser["email"])//swastika@google.com
//but when key value pair comes like this "fulNname":"Swastika" you have to write in the second format

//console.log(JUser["fullName"])

//Interview Question
/*Take a Symbol add that to the key and print it */

/*If you write symbol like this mysym:"mykey1" it will be considered as a string */
/*for symbol it has to be like this: [mysym]:"mykey1" */

console.log(JUser[mySym])//mykey1

//Overwrite

JUser.email = "swastika@microsoft.com"
console.log(JUser)/* {
    name: 'Swastika',
    age: 21,
    location: 'Kolkata',
    email: 'swastika@microsoft.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  }*/

//freeze
//Object.freeze(JUser)//now can not be overwritten
//JUser.email="swastika@chatgpt.com"
console.log(JUser)/*{
    name: 'Swastika',
    age: 21,
    location: 'Kolkata',
    email: 'swastika@microsoft.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  }
 */
//Function
//In js you can define function as variable

JUser.greeting=function(){
    console.log("Hello World")

}
// console.log(JUser.greeting)//undefined
// console.log(JUser.greeting())//Error:JUser.greeting is not a function because JUser is freezed

//After unfreezing
console.log(JUser.greeting)//[Function (anonymous)]
console.log(JUser.greeting())/*Hello World
undefined */

JUser.greetingTwo=function(){
    console.log("Hello JSuser",`${this.name}`)

}
console.log(JUser.greeting())/*Hello world
                               undefined*/
console.log(JUser.greetingTwo())/*Hello JSuser Swastika
                                  undefined */