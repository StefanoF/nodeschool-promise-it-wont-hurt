/*
Task

Let's build this function!

1. Construct two promises using Q's defer
2. Construct a function "all" that accepts two promises as arguments.
   Your function should create an internal promise using Q's defer and return it!
   Your function should create a counter variable with initial value of 0.
   Your function should attach "then" fulfillment handlers to both
   promises which increment an internal counter and fulfill the function's
   internal promise with an array containing BOTH values IF the counter reaches 2.
   You should ALSO attach rejection handlers to both promises which both reject
   the internal promise!
3. Pass your two promises into your new function and then attach console.log as
   a fulfillment handler to the promise returned by your function.
4. Attach a function to setTimeout that resolves both of the promises you created
   and passed to your function with the values "PROMISES" and "FTW" respectively.
   Set the timeout delay to 200ms.

TIP: Don't forget to pass the "promise" attribute of your deferreds!

If your function is successful it should print out ["PROMISES", "FTW"] which is
just someone's opinion man!
*/
var q = require('q');

var promiseOne = q.defer();
var promiseTwo = q.defer();

var all = function (promise1, promise2){
	var internal = q.defer();
	var counter = 0;
	var value1;
	var value2;

	promise1.then(function(result){
		value1 = result;
		counter++;

		if(counter == 2){
			internal.resolve([value1, value2]);
		}

	}).then(null, internal.reject)
		.done();

	promise2.then(function(result){
		value2 = result;
		counter++;

		if(counter == 2){
			internal.resolve([value1, value2]);
		}

	}).then(null, internal.reject)
		.done();


	return internal.promise;
};

all(promiseOne.promise, promiseTwo.promise).then(console.log).done();

setTimeout(function(){
	promiseOne.resolve('PROMISES');
	promiseTwo.resolve('FTW');
}, 200);



/*
Bonus

Try using Q's "all" method to replace your function.  Note that their implementation
expects you to pass it an ARRAY of promises and not individual arguments.
*/
var q = require('q');
var promiseOne = q.defer();
var promiseTwo = q.defer();

q.all([promiseOne.promise, promiseTwo.promise]).then(function(res){
	return [res[0], res[1]];
}).then(console.log);

setTimeout(function(){
	promiseOne.resolve('PROMISES');
	promiseTwo.resolve('FTW');
}, 200);



/*
Super Bonus

Try using Q's "spread" method to replace your "then" handler on the promise returned
by "all".  Note that spread will return individual arguments which should affect
your output slightly!

Q.all, .spread, etc are just some of the many promise utility functions that many
promise libraries make available or that you can easily build for yourself.  The
composability of promises (do to them being re-ified objects) is a huge upside
and you can quickly discover many amazing patterns for building async systems.
*/
var q = require('q');
var promiseOne = q.defer();
var promiseTwo = q.defer();

q.all([promiseOne.promise, promiseTwo.promise]).spread(function(res1, res2){
	return [res1, res2];
}).then(console.log);

setTimeout(function(){
	promiseOne.resolve('PROMISES');
	promiseTwo.resolve('FTW');
}, 200);
