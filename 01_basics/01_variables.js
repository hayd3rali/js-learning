const accountId = 12345
let accountEmail = "abcd@123.com"
var accountPass = "abcd1234"
accountName = "Hello"

console.log(accountId)

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPass, accountName])
