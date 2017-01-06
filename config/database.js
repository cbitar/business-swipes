var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var NODE_ENV = process.env.NODE_ENV || 'development'

//todo check database URL has been set on Heroku
var url = process.env.DATABASE_URL

// mongoose.connect(url);
// mongoose.connect('mongodb://localhost/app');
mongoose.connect(url)

// database connection event
mongoose.connection.once('open', function () {
  console.log(`Mongoose connected to: ${mongoose.connection.host}:${mongoose.connection.port}`);
});

module.exports = mongoose;
