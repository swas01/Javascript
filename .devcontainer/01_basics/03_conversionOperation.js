// let score = "33"
   
// console.log(typeof score);//string
// console.log(typeof (score));//string

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);//number
// console.log(valueInNumber);//33

// let score_try="33abc"
// console.log(typeof score_try);//string
// let valueInNumber_try = Number(score_try);
// console.log(typeof valueInNumber_try);//number
// console.log(valueInNumber_try)//NaN

// let score_try_again=null;
// console.log(typeof score_try_again);//object
// let valueInNumber_try_again = Number(score_try_again);
// console.log(typeof valueInNumber_try_again);//number
// console.log(valueInNumber_try_again)//0


// let score_once=undefined;
// console.log(typeof score_once);//undefined
// let valueInNumber_once = Number(score_once);
// console.log(typeof valueInNumber_once);//number
// console.log(valueInNumber_once)//NaN

// let score_boolean=true;
// console.log(typeof score_boolean);//boolean
// let valueInNumber_boolean = Number(score_boolean);
// console.log(typeof valueInNumber_boolean);//number
// console.log(valueInNumber_boolean)//1

// let score_string="Swastika";
// console.log(typeof score_string);//string
// let valueInNumber_string = Number(score_string);
// console.log(typeof valueInNumber_string);//number
// console.log(valueInNumber_string)//NaN


// //"33"=>33
// //"33abc"=> NaN
// //true=> 1;false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//true

// let isLoggedIn_empty = ""
// let booleanIsLoggedInEmpty = Boolean(isLoggedIn_empty);
// console.log(booleanIsLoggedInEmpty);//false

// let isLoggedInName = "swastika"
// let booleanIsLoggedInName = Boolean(isLoggedInName);
// console.log(booleanIsLoggedInName);//true

// //1 => true; 0 => false
// // "" => false
// //"swastika" => true

// let someNumber=23;
// let StringNumber= String(someNumber);
// console.log(StringNumber)//23
// console.log(typeof (StringNumber));//string



//*****************Operations**************//

let value=3;
let negValue=-value
//console.log(negValue)//-3

// console.log(2+2)//4
// console.log(2-2);//0
// console.log(2*2)//4
// console.log(2**2)//4
// console.log(2/2)//1
// console.log(2%2)//0

// let str1="Hello"
// let str2=" Swastika"

// let str3=str1+str2
// console.log(str3);//Hello Swastika

// console.log("1"+2);//12
// console.log(1+"2");//12

// console.log("1"+2+2);//122
// console.log(1+"2"+1);121
// console.log(1+2+"2");//32

// console.log((3+4)*5%3)//Always use brackets to avoid messy or confusing code


// console.log(true)//true

// console.log(+true)//1 code should be simple 
// console.log(+"")//0 code should not be complicated like this one

// let num1,num2,num3;

// num1=num2=num3=2+2;//again confusion code avoid this

// let gameCounter =100
// gameCounter++//or ++gameCounter suffix and prefix operator
// console.log(gameCounter)//101

// //link to study(given)

// console.log(2>1)//true
// console.log(2>=1)//true
// console.log(2<1)//false
// console.log(2==1)//false
// console.log(2!=1)//true

// console.log("2" > 1)//sometimes two different datatype can not give predictable ans
// console.log("02" > 1)
/** Note
 * In JS == and >= > <= < work differently
 */
/*This code can put you in confusion so we will always do strict check
  Priorities ti clean code always

  // console.log(null >0)//false
// console.log(null == 0)//false
// console.log(null >=0)//true

// console.log(undefined == 0)//false
// console.log(undefined > 0)//false
// console.log(undefined < 0)//false

*/


//===(Strict check) not only checks values but also checks for the dataTypes

// console.log(2==="2")//false because different datatypes so conversion isnt possible


