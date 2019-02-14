var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/conf', function(err) {
  if (err) { throw err; }
});
