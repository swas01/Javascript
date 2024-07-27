// let a=10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let a=10
    const b=20
    var c=30

}
//console.log(a)//ReferenceError: a is not defined
//console.log(b)//ReferenceError: b is not defined
console.log(c)//30 (this is happening because of using var this should'nt be)

var c =300
if(true){
    let a=10
    const b=20
    var c=30

}
console.log(c)//30 

let a=20
if(true){
    let a=10
    const b=20
    console.log("Inner a",a)//block scope   Inner a 10
}
console.log(a)//global scope  20

//Nseted Scope
function One(){
    const username ="Swastika"
    function Two(){
        const website="Yoputube"
        console.log(username)
    }
    //console.log(website)//ReferenceError: website is not defined
    Two()//Swastika
}
One()


if(true){
    
    const username="swastika"
    if(username=="swastika"){
        const website=" Youtube"
        console.log(username+website)//swastika Youtube
    }
    //console.log(website)//ReferenceError: website is not defined
}
//console.log(username)//ReferenceError: username is not defined\

//*************************************Interesting********************************************/

console.log(addOne(6)) // 7putting it before declaration it will run
function addOne(nume){// sometimes that addOne is called expression
    return nume+1
}
console.log(addOne(5))//6


//console.log(addTwo(5))//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2                  //in js we can define function to a variable
}
console.log(addTwo(5))//7