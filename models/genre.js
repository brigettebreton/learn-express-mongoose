var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    genre: {type: String, required: false, maxLength: 100, minLength: 4},
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
