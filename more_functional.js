var apps = require('q-io/http');
var _ = require('lodash');

apps.read('http://localhost:7000')
  .then(_.compose(apps.read, function (id) { 
		return 'http://localhost:7001/' + id; 
	}))
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.error)
  .done();


// soluzione alternativa
var qhttp = require('q-io/http')
, _ = require('lodash')
, cachePath = "http://localhost:7000/"
, dbPath = "http://localhost:7001/";

var buildDbPath = _.bind(String.prototype.concat, dbPath);

qhttp.read(cachePath)
	.then(_.compose(qhttp.read, buildDbPath))
	.then(_.compose(console.log, JSON.parse))
	.then(null, console.error)
	.done();