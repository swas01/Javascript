let myDate=new Date()
// console.log(myDate)//2024-07-12T09:07:08.919Z not readable

// console.log(myDate.toString())//Fri Jul 12 2024 09:08:37 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate)//object
// console.log(myDate.toDateString())//Fri Jul 12 2024
// console.log(myDate.toISOString())//2024-07-12T09:13:08.335Z
// console.log(myDate.toJSON())//2024-07-12T09:13:08.335Z
// console.log(myDate.toLocaleDateString())//7/12/2024
// console.log(myDate.toLocaleString())//7/12/2024, 9:13:08 AM
// console.log(myDate.toLocaleTimeString())//9:13:08 AM

//to declare a specific date
// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let newCreatedDate=new Date(2023,0,23,5,3)
// console.log(newCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

let anotherCreatedDate=new Date("2023-01-23")
// console.log(anotherCreatedDate.toLocaleString())//1/23/2023, 12:00:00 AM

let another=new Date("01-14-2023")
// console.log(another.toLocaleString())

//to get some data like fastest submission 
let myTimeStamp=Date.now()
// console.log(myTimeStamp)//1720777240550
// console.log(another.getTime())//1673654400000 //in ms

// console.log(Date.now())//1720777387372 in ms
// console.log(Date.now()/1000)//1720777468.312 (converted into s but with decimal points)
// console.log(Math.floor(Date.now()/1000))// 1720777559 (converted into seconds ignoring decimal points)

let newDate = new Date()
//console.log(newDate)
console.log(newDate.getMonth()+1);//6+1   (July)
console.log(newDate.getDay())//5 (friday)

//`${newDate.getDay()}` and the time ...
//customising object 
newDate.toLocaleString('default',{
    weekday:"long"

})

