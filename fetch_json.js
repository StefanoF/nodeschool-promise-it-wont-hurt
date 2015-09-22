/*
npm install q-io

Task

Fetch JSON from "http://localhost:1337" and console.log it.

There are several things you will want to know:

1. q-io's http module has a "read" method which returns a promise for the content
   of a successful (status 200) http request.
2. Parse the returned JSON and console.log it for much win.

This challenge is a bit tricky but the implementation is relatively straightforward.
If you get stuck, refer to the q-io documentation for clarification.
*/
var apps = require('q-io/http');

apps.read('http://localhost:1337')
	.then(function(json){
		console.log(JSON.parse(json));
	}).done();
