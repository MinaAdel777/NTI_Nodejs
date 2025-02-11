const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/MVCProject");
  console.log("Database Connected");
};

module.exports = connectDB;
