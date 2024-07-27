const user ={
    username:"Swastika",
    price:999,
    welcomeMessage :function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)/* before overwriting
        {
            username: 'Swastika',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        } 
            after overwriting
        {
            username: 'Sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        } */

    }

}
user.welcomeMessage()//Swastika ,welcome to website
user.username="Sam"
user.welcomeMessage()//Sam ,welcome to website
console.log(this)//{}


//if we write console.log(this) in the browser it{ will return window object which is global

//Within function you can write "this"

function chai(){
    console.log(this)
}
//chai()//returns a lot of things
//WIthin function we can only use objects

function chai(){
    let username="Swastika"
    console.log(this.username);//undefined this cannot be used within function
}
chai()

const test=function(){
    let username="Swastika"
    console.log(this.username);//undefined
}
test()


/*****************************Arrow Function********************************/
const arrow1 = ()=>{
    let usernmae="Swastika"
    console.log(this)//{}
    console.log(this.username)//undefined
}
arrow1()

const addTwo1=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo1(3,4))//7

const addTwo2=(num1,num2)=>num1+num2
console.log(addTwo1(3,5))//8

/*****************Note************************/
/**
 * In case of curly braces we have to write return statement 
 * But in case of parenthesis we dont have to
 */
/*To return object you have to wrap within parethesis */

const addTwo=(num1,num2)=>({username:"Swastika"})
console.log(addTwo(3,4))//{ username: 'Swastika' }

/**
 * Sometimes functions get pollouted with global scope which web dont want
 * That's why we write function within parenthesis
 */


//Not working
// (function inFun(){//named IIfee
//     console.log("DB Connected");
// })();

//semicolon is important to state the function where to stop unless it will give error when you declare same kind of function

//not working
// (function aurcode(){
//     console.log("DB connected two");
// })();


//Not working
// (()=>{
//     console.log("DBconnected")
// })();

//not working
// ((name)=>{
//     console.log(`DB connected two,${name}`)
// })("Swastika");

//*********Interview********//
//how code executes
