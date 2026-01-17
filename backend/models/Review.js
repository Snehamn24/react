const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
