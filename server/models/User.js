const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter required field."],
      unique: true,
      min: 5,
    },
    email: {
      type: String,
      required: [true, "Please enter required field."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter required field."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
