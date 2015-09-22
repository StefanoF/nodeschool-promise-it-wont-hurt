/*
Task

Let's talk to two remote processes over HTTP being run by your friend
and mine, "localhost"

Port 7000: Faux session cache (redis or some such thing)
Port 7001: Faux database (mongo, level, postgres etc)

As in the previous lesson, use the "q-io" module to create promises
as wrappers for HTTP responses.  HINT: You will probably need more than
one promise...

1. Send an HTTP GET request to the session cache on port 7000.  A JSON payload
   will be returned to you containing a primary key called "id".
2. Grab that id from the session response and send an HTTP GET request to
   your database on port 7001 to the url "localhost:7001/<id>".
3. If successfully done, your database will return a user object.  console.log
   it to win many nerd-points.

Hint
Don't forget that q-io's read method returns a buffer.  You will need to convert
it to a string and JSON.parse it to complete this lesson!
*/
var apps = require('q-io/http');

apps.read('http://localhost:7000/')
	.then(function(id){
		return apps.read('http://localhost:7001/'+id);

	}).then(function(json){
		console.log(JSON.parse(json));

	}).then(null, console.error)
	.done();