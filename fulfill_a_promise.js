/*
Task

Use the popular "Q" library to create a promise.  

Pass console.log to the "then" method of your promise.

Manually resolve that promise using setTimeout with a delay of 300ms and pass
it a parameter of "RESOLVED!".

In Q, promises are created using Q.defer();

The defer that is created is not exactly the promise and in order to return the actual
promise object itself you must return the "promise" attribute of the newly created defer.

Boilerplate
*/

var q = require('q');
var defer = q.defer(); 
  //defer.promise is the actual promise itself
  //defer.promise.then is the "Q" way of attaching a then handler
  //your solution here 
var param = 'RESOLVED!';

setTimeout(function(){
	defer.resolve(param);
}, 300);

defer.promise.then(function(resp){
	console.log(resp);
});