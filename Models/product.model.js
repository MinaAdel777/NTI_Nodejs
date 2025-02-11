const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  imageURL: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  status: {
    vailability: {
      type: String,
      default: "available",
      required: true,
    },
    stockStatus: {
      type: String,
      default: "inStock",
      required: true,
    },
  },
  productStatus: {
    type: String,
    default: "active",
  },
});

module.exports = mongoose.model("Product", productSchema);
