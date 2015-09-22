/*
Task

Create a function to print error.message using console.log.  Pass this 
function as a rejection handler to the "then" method of your promise.

Manually reject that promise using setTimeout with a delay of 300ms and pass it
an Error object with parameter "REJECTED!";

Boilerplate
*/

var q = require('q');
var defer = q.defer(); 

/* 
then accetta due parametri:
	- funzione di resolved;
	- funzione di rejected;
*/	
defer.promise.then(function(){
	console.log('Accepted!');

}, function(err){
	console.log(err.message);

});

setTimeout(function(){
	var error = new Error();
	error.message = "REJECTED!";

	defer.reject(error);

}, 300);



// soluzione alternativa più compatta
function printError (err) {
  console.log(err.message); 
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));