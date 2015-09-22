var q = require('q');

var parsePromised = function (json) {
  var def = q.defer();

  try {
    def.resolve(JSON.parse(json));
  } catch (e) {
    def.reject(e);
  }

  return def.promise;
};

q.fcall(parsePromised, process.argv[2])
	.then(null, console.log);


/* soluzione alternativa
q.fcall(JSON.parse, process.argv[2])
	.then(null, console.log);
*/