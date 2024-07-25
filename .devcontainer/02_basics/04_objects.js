const tinderUser=new Object()//Singletone object
// const tinderUser={}//non Singletone
// console.log(tinderUser)//{}

//const tinderUser1 ={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }\

// //Object inside object
// const regularUser = {
//     email:"same@gmail.com",
//     fullname:{
//         userFullName:{
//             firstName:"Swastika",
//             lastName: "Basak"
//         }
//     }
// }
// console.log(regularUser.fullname)//{ userFullName: { firstName: 'Swastika', lastName: 'Basak' } }
// console.log(regularUser.fullname.userFullName)//{ userFullName: { firstName: 'Swastika', lastName: 'Basak' } }
// console.log(regularUser.fullname.userFullName.firstName)//Swastika

const obj = {1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"d",6:"e"}
// // //combine
// // const obj3={obj,obj2}
// // console.log(obj3)//{ obj: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// /*here all the values getting stored into obj */
// /*Copy the value of all enumerable source object to a target object. Return the obj*/
// const obj3= Object.assign(obj,obj2)
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// //When more objects,Here a new object is returned
// const obj5 = Object.assign({},obj,obj2,obj4)
// console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'd', '6': 'e' }

// //Another way(spread Operator)
// const obj6={...obj,...obj2}
// console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//When values come  from  DATABASE

const User = [
    {
        id:1,
        email:'SwastikaBasak@microsoft.com'
    },
    {
        id:2,
        email:'SwastikaBasak@google.com'
    },
    {
        id:3,
        email:'SwastikaBasak@golmanSachs.com'  
    }
]

console.log(User[1].email)//SwastikaBasak@google.com
console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }\

console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//to check if the value exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true

//destructure of objects
const course = {
   coursename : "js in hindi",
   price : 999,
   courseInstructor :"Swastika"
}

//course.courseInstructor  //unclear code

const {courseInstructor}= course
console.log(courseInstructor)//Swastika

const{courseInstructor:Instructor} =course
console.log(Instructor) //Swastika

/*Object deconstruction
const navbar =({company})=>{
    }
    navbar (comapany ="Swastika")
*/

//json format
//{
 //   "name" : "Swastika",
 //    "coursename ": "js in hindi"
//     "price":free
//}

//randomuser.me API