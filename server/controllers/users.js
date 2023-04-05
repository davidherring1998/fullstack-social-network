const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register a new user
// POST
// /api/users
const registerUser = asyncHandler(async (req, res) => {
  // Deconstruct.
  const { username, email, password } = req.body;

  // Validate inputs are received.
  if (!username || !email || !password) {
    res.status(400).json({ msg: `Bad request, required inputs not received.` });
  }

  // Check to see if user already exist.
  const userExist = User.find({ email });
  if (email) {
    res.status(400).json({ msg: `Bad request, user already exist.` });
  }

  // Hash the password.
  const salt = await bcrypt.genSalt(10); // Generate salt using the default of 10 rounds.
  const hashedPassword = await bcrypt.hash(password, salt); // Required plaintext password and salt.

  // Create the user.
  const user = User.create({
    username,
    email,
    password: hashedPassword,
  });

  // Check that user was created.
  if (user) {
    res.status(200).json({
      msg: `User was successfully added to the database`,
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json({ msg: `Bad request, user not registered.` });
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
};
