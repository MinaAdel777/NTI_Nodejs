const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    retypepassword: {
      type: String,
      required: true,
    },
    userType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userType",
      required: true,
      default: "678a762c5babee745b7bb7a7",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
