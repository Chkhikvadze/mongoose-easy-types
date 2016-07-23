var mongoose = require('mongoose');

// Global before hook
before(function (done) {

	mongoose.connect('mongodb://localhost:27017/testMongooseTypes');
	done();
});

// Global after hook
after(function (done) {
  // here you can clear fixtures, etc.
  // remove database
  mongoose.connection.db.dropDatabase();

  console.log(); // Skip a line before displaying Sails lowering logs
  done();
});
