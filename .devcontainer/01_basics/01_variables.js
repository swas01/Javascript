const accountId = 144553
let accountEmail = "swastika@google.com"
var accountPassword="12345"
accountCity = "Jaipur"
let accountState ;
//accountId = 2//not allowed
 //saving it for now
/*
prefer not to use var
beacuse of issue in block scope and functional scope 
*/
accountEmail="sb@sb.com"
accountPassword="21212121"
accountCity="Kolkata"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])