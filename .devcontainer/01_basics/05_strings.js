const name= "Swastika"//behind the screen it is also invoking object
const repoCount = 50 

//console.log(name+ repoCount + "Value");//not recommended because of being outdated

//`` means string interpolation where placeholders will be given amd variable you can directly inject into that
//also we can use function here with variable like name.toUpperCase() like this 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//readable and modern


//Another way of declaring string here String is a object run this in browser you ll get a key value pair 
const gameName=new String('Swastika')

console.log(gameName[0])//s  that's what we got from the browser
console.log(gameName.__proto__);//{}

console.log(gameName.length);//8
console.log(gameName.toUpperCase)//[Function: toUpperCase]
console.log(gameName.toUpperCase())//SWASTIKA //but it didnt change the original data

console.log(gameName.charAt(2))//a
console.log(gameName.indexOf('a'))//2

const newString = gameName.substring(0,4)
console.log(newString)//Swas
const stringTwo = gameName.substring(-7,3)
console.log(stringTwo)//Swa //so this is ignoring negative value and starting from 0 index

const anotherString = gameName.slice(-7,3)
console.log(anotherString)//wa

const newStringOne = "  swastika  "
console.log(newStringOne)// (space)swastika(space)
console.log(newStringOne.trim());//swastika

const url = "https://swastika.com/swastika%20basak"//%20 is given by browser when there is a space in url
console.log(url.replace('%20','-'))// https://swastika.com/swastika-basak


console.log(url.includes('swastika'))//true
console.log(url.includes('butterfly'))//false

//splits every part of a string based on -
const StringThree='Swas-tika-basak'
console.log(StringThree.split('-'));//[ 'Swas', 'tika', 'basak' ]