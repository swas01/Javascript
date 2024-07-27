// function myfunction(){
//     console.log("S")
//     console.log("w")
// }
// console.log(myfunction)//[Function: myfunction]
                 
// console.log(myfunction())//S
//                          //w
//                          //undefined

// function addTwoNumbers(number1,number2){//number 1 and number 2 are parameters
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)//7 these 3,4 are arguments

// /*but the problem here is we are considering that user putting number but what if*/

// addTwoNumbers(3,"4")//
// addTwoNumbers(3,"a")//3a

// //checking is important

// addTwoNumbers(3,null)//3

// //here we can store the values
// const result=addTwoNumbers(3,5)//8
// console.log("Result:",result)//undefined because we have,nt returned anything from the function

function addTwoNumbers(number1,number2){//number 1 and number 2 are parameters
    let result=(number1+number2)
    return result
}
const result1=addTwoNumbers(3,5)
console.log(result1)//8

function LogUser(username){
    return `${username} just logged in`
}
LogUser("Swastika")//
console.log(LogUser("Swastika"))//Swastika just logged in
console.log(LogUser(""))// just logged in
console.log(LogUser())//undefined just logged in

//so to avoid this
function loginUserMessage(username){
    if(username==undefined){
        console.log("Please enter valid username")
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage())//Please enter valid username
                               //undefined

/*We can give a default username in that case if block will not execute whenever there is no argument in the function call */

function loginUser(username="Sam"){
    return `${username} just logged in`
}
console.log(loginUser())//Sam just logged in
console.log(loginUser("Swastika"))//Swastika just logged in

function CalculatePrice(num1){
    return num1
}
console.log(CalculatePrice(200,300,400))//200 (rest will be ignored)

//So when we don't know actual number of parameter

//**********Rest Operator**********//
/*Looks like spread opertaor but upon work we decide when to call spread operator and when to call rest*/

function userLoginMessage(...num1){
    return num1
}
console.log((userLoginMessage(200,300,400,500)))//[ 200, 300, 400, 500 ]
//return an array

function userLogin(val1,val2,...num1){
    return num1
}
console.log(userLogin(200,300,400,500,600))//[ 400, 500, 600 ]

const user= {
    username:"Swastika",
    price:199
}
function handleObject(anyObject){ //any object other than user can be passed
    console.log (`${anyObject.username} and the price is ${anyObject.price}`)//Swastika and the price is 199
}
handleObject(user)

//but if we had written prices instead of price*****
function handleObject1(anyObject){ //any object other than user can be passed
    console.log (`${anyObject.username} and the price is ${anyObject.prices}`)//Swastika and the price is undefined
}
handleObject1(user)

/*In this case before putting any field we will check if that field exists */
//Other way
const user1= ({
    username:"Swastika",
    price:399
})

//passing array
const myArray=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))//300

//other wat
console.log(returnSecondValue([200,400,100]));//400