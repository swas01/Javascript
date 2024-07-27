/*
 * Everytime every program should not run 
*like when we log in one set of code executes and when we log out other set of code executes
 */ 

const isUserloggedIn=true
if(isUserloggedIn)
{
    if(2=="2"){
        console.log("executed")//executed
    }
}
//=== checks both for data and its type
if(isUserloggedIn)
{
    if(2==="2"){
        console.log("executed")
    }
    else{
    console.log("not executed")//not executed
    }
}

const temp=41
if(temp===40){
    console.log("lest than 50")
}
else{
    console.log("Greater than 50")//Greater than 50
}

const score=200
if(score>100){
    const power="fly"
    console.log(`User power :${power}`)//User power :fly
}
//console.log(`User power :${power}`)//ReferenceError: power is not defined

//but if we had written var instead of const then power could have been accessed

const balance=1000
//not readable should not be used
if(balance>500)  console.log("test") ,console.log("test2")//test
                                                        //test2

const userLog =true
const debitCard=true
const LoggedInFromGoogle =true
const loggedInFromEmail=true
if(userLog && debitCard){
    console.log("Yes")//yes
}

const month =3
switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")//Mar
        break;
    default:
        console.log("No")
        break;
}


