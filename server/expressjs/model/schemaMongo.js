const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  rating: Number, // Number is shorthand for {type: Number}

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("movies", movieSchema);
