/*falsy value
*false,0,-0,BigInt On,"",null,undefined,Nan
*truthy "0",false,"",[],{},function(){}
*/
const email="s@google.com"
if(email){
    console.log("Got")//Got
}
else{
    console.log("Not got")
}

const userEmail=[]
if(userEmail.length===0){
    console.log("ArrayisEmpty")//ArrayisEmpty
}

const emptyObj={}
if(Object.keys(emptyObj).length){ //this returns a string
    console.log("Empty")
}

//Nullish Coalesing Operator(??):null undefined 
let val1;
val1=5??10
console.log(val1)//5
val1=undefined??15
console.log(val1)//15
val1=undefined??15??20
console.log(val1)//15

//Ternary Operator
//condition?true:false

const iceTea=100
iceTea<=80?console.log("less than 80"):console.log("more than 80")//more than 80
