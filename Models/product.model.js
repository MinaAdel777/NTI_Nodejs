const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  category: String,
  imageURL: String,
});

module.exports = mongoose.model("product", productSchema);
