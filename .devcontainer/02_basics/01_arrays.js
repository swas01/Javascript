//const myArr = [0,1,2,3,4,5,true,"Swastika"] //Different datatypes can be added 

//more elements can be added
//can have mix datatypes
//zero based indexing
/*JavaScript array copy operation create shallow operation
(All Stadard built in copy operations with array JavaScript object create shallow copies,rather than deep copies)
*/
//Array objects cannot be using arbitrary strings

const myarr = [0,1,2,3,4,5,"Swastika"]
console .log("Swastika")//not allowed

//another way of declaring array

const myArr2=new Array(1,2,3,4)
console.log(myArr2[0])//1

//Array methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()
// console.log(myArr2)//[1,2,3,4,5,6]

myArr2.unshift(9);
/*suitable for small value but 
*this would e very time consuming in case of large values
*because of shifting
*/
console.log(myArr2)//[ 9, 1, 2, 3, 4 ]

//to remove element from the first
myArr2.shift()
console.log(myArr2)//[ 1, 2, 3, 4 ]

//questions
console.log(myArr2.includes(9))//false //in future we can have thre datatype and judge the val
//console.log(myArr2.indexOf(9))//-1


const newArr = myArr2.join()//adds all elements of an array into a string
console.log(newArr)//1,2,3,4
console.log(myArr2)//[ 1, 2, 3, 4 ]

console.log(typeof newArr)//string

//slice,splice

console.log("A",myArr2)//A [ 1, 2, 3, 4 ]

//slice does'nt manipulate origial array
const newArr3=myArr2.slice(1,3)
console.log(newArr3)//[ 2, 3 ]
console.log("B",myArr2)//B [ 1, 2, 3, 4 ]

//splice manipulates original array
const myArr4 = newArr.splice(1,3)
console.log("C",newArr)
console.log(newArr4)

