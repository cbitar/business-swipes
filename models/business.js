var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var businessSchema = new mongoose.Schema({
  name: { type : String, required : true },
  email: { type : String, unique : true, required : true },
  videos: Array,
  genre: String,
  bio: String,
  instrument: { type : String, required : true },
  level: { type : String, required : true },
  created: { type: Date, default: Date.now }
});

businessSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('Business', businessSchema);
