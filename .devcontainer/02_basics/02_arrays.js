const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// //push adds elements in the existing array
// marvel_heros.push(dc_heros)
// //array inside array
// //inner array will be considered as one element
// console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1])//flash

// //concat return new array
// //limitation of concat :you can concat one array at a time
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heros)//object


// //Another and preferable way it will not return array it will return individual value
// //Use of spread operator

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(typeof all_new_heros)//object

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// //Here in case of inifinity it is preferable to give the exact depth of the array
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)/*[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]
//   */

// console.log(Array.isArray("Swastika"))//false
//how can it be converted from string or object

console.log(Array.from("Swastika"))/*[
    'S', 'w', 'a',
    's', 't', 'i',
    'k', 'a'
  ] */

console.log(Array.from({name:"Swastika"}))//[]
//because we have to specify what array is to be made like for object or keys


let score1=100
let score2=200
let score3=300


//returns a new array from the set of variable ,array etc
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]



