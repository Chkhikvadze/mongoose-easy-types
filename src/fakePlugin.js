var _ = require('lodash');

module.exports = function (schema) {
	/**
	 * variabla to store field paths & fake paths
	 * @type {Object[]}
     */
	var fakeMap = [];



	initialize(schema);


	/**
	 * Callback for fake|seed
	 *
	 * @callback fakeCallback
	 * @param {Object[]} items fake generated items
     */

	/**
	 * static function for generating fake items: Model.fake(n)
	 *
	 * @param {number|fakeCallback} quantity of fake items to return
	 * @param {fakeCallback} callback
	 * @returns {void}
     */
	schema.statics.fake = function (quantity, callback) {
		if (typeof quantity === 'function') {
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

	/**
	 * static function for seeding db with fake items: Model.seed(n)
	 *
	 * @param {number|fakeCallback} quantity of fake items to return
	 * @param {fakeCallback} callback
	 * @returns {void}
	 */
	schema.statics.seed = function (quantity, callback) {
		var Model = this;

		Model.fake(quantity, function (items) {
			Model.create(items, callback);
		});
	};

	/**
	 * instance method for filling with fake values:
	 * modelInstance.fake() | modelInstance.fake(['some prop 1', 'some prop 2'])
	 *
	 * @param {string[]} props to fill with fake values
	 * @returns {void}
	 */
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

	/**
	 * initializes map array for fake path & fake field
	 * @private
	 * @param {Object} schema
     */
	function initialize(schema) {
		schema.eachPath(function (pathname, schemaType) {
			if (schemaType.options && schemaType.options.fakePath) {
				fakeMap.push({
					fieldPath: pathname,
					fakePath: schemaType.options.fakePath
				});
			}
		});
	}

	/**
	 * sets fake generated value
	 * @private
	 * @param {Object} instance instance to set on
	 * @param {string} fieldPath path to isntance property
	 * @param {Function} fakePath fake value generator function
     */
	function setFakeValue(instance, fieldPath, fakePath) {
		_.set(instance, fieldPath, fakePath());
	}
};
