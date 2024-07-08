let score = "33"
   
console.log(typeof score);//string
console.log(typeof (score));//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//33

let score_try="33abc"
console.log(typeof score_try);//string
let valueInNumber_try = Number(score_try);
console.log(typeof valueInNumber_try);//number
console.log(valueInNumber_try)//NaN

let score_try_again=null;
console.log(typeof score_try_again);//object
let valueInNumber_try_again = Number(score_try_again);
console.log(typeof valueInNumber_try_again);//number
console.log(valueInNumber_try_again)//0


let score_once=undefined;
console.log(typeof score_once);//undefined
let valueInNumber_once = Number(score_once);
console.log(typeof valueInNumber_once);//number
console.log(valueInNumber_once)//NaN

let score_boolean=true;
console.log(typeof score_boolean);//boolean
let valueInNumber_boolean = Number(score_boolean);
console.log(typeof valueInNumber_boolean);//number
console.log(valueInNumber_boolean)//1

let score_string="Swastika";
console.log(typeof score_string);//string
let valueInNumber_string = Number(score_string);
console.log(typeof valueInNumber_string);//number
console.log(valueInNumber_string)//NaN


//"33"=>33
//"33abc"=> NaN
//true=> 1;false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

let isLoggedIn_empty = ""
let booleanIsLoggedInEmpty = Boolean(isLoggedIn_empty);
console.log(booleanIsLoggedInEmpty);//false

let isLoggedInName = "swastika"
let booleanIsLoggedInName = Boolean(isLoggedInName);
console.log(booleanIsLoggedInName);//true

//1 => true; 0 => false
// "" => false
//"swastika" => true

let someNumber=23;
let StringNumber= String(someNumber);
console.log(StringNumber)//23
console.log(typeof (StringNumber));//string