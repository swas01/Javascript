//Primitive: Call by Value 

//7 types : String,Number,Boolean,Null,undefined,Symbol(to make any value unique),BigInt
//Javscipt is statically or dynamically typed

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//even if same parameter is passed still Symbol returns different value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)//Symbol(123)
console.log(anotherId)//Symbol(123)

console.log(id === anotherId)//false

const bigNumber = 364728627828n;//n converts the number into bigint

//Reference Type(Non Primitive)

//Array,Objects, functions

const heros= ["shaktiman" , "Nagraaj","Doga"]