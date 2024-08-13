const accountId = 144553
let accountEmail = "deepak2001lokhande@gmail.com"
var accountPassword = "123456"
accountCity = "JAipur"
let accountState;

// coountId = 2 //not allowed

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
 1.Prefer not to use (var).
 2.because of issue in block scope and function scope.
 */

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


