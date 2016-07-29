var _ = require('lodash');

module.exports = function (schema, options) {
	options = options || {};

	var fakeMap = [];

	// Find every path that has an `fakePath` option
	schema.eachPath(function (pathname, schemaType) {
		if (schemaType.options && schemaType.options.fakePath) {
			fakeMap.push({
				fieldPath: pathname,
				fakePath: schemaType.options.fakePath
			});
		}
	});

	// register static fake function
	schema.statics.fake = function (quantity, callback) {
		if (quantity === 'function') {
			callback = quantity;
			quantity = 1;
		}

		var Model = this;
		var result = [];
		for (var i = 0; i < quantity; i++) {
			var item = new Model();
			fakeMap.forEach(function (fake) {
				setFakeValue(item, fake.fieldPath, fake.fakePath);
			});
			result.push(item);
		}

		callback(result);
	};

	schema.statics.seed = function (quantity, callback) {
		var Model = this;

		Model.fake(quantity, function (items) {
			Model.create(items, callback);
		});
	};

	schema.methods.fake = function (props) {
		var instance = this;
		var map = fakeMap;
		if (props) {
			map = _.intersectionWith(fakeMap, props, function (fakeVal, filterVal) {
				return fakeVal.fieldPath === filterVal;
			});
		}

		map.forEach(function (fake) {
			setFakeValue(instance, fake.fieldPath, fake.fakePath);
		});
	};

	function setFakeValue(instance, fieldPath, fakePath) {
		_.set(instance, fieldPath, fakePath());
	}
};
