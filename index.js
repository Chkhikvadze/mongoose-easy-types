var fs = require('fs');
var path = require('path');

var types = {};
// loop through files in types directory
var typesDir = path.join(__dirname, './src/types');
fs.readdirSync(typesDir)
	.forEach(function (file) {
		var prop = file.split('.')[0];
		types[prop] = {};

		// require type module & extract all types within
		var type = require(path.join(typesDir, file));
		for (var t in type) {
			if (type.hasOwnProperty(t)) {
				types[prop][t] = type[t];
			}
		}
	});
// export
module.exports.Types = types;

module.exports.Plugin = require('./src/fakePlugin');
