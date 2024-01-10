// Use async handler instead of adding try/catch block to the each of the methods
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register user" });
});

//@desc Login  user
//@route POST /api/users/login
//@access public
const loginrUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Get a current  user
//@route Get /api/users/current
//@access public
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = {
  registerUser,
  loginrUser,
  getCurrentUser,
};
