const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);