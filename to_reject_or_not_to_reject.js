/*
Task

Let's build a simple script to PROVE to ourselves that promises may only resolve
one time and all future attempts to resolve them will simply be ignored.

1. Create a promise using Q.defer
2. Pass console.log as the first AND second argument to your promise's "then" method
3. Resolve the promise with a value of "I FIRED"
4. Reject the promise with a value of "I DID NOT FIRE"

If successful, your script should only log "I FIRED" and should NOT log 
"I DID NOT FIRE".
*/

var q = require('q');
var defer = q.defer();

defer.promise.then(console.log, console.log);

defer.resolve('I FIRED');
defer.reject('I DID NOT FIRE');