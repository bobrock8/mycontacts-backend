const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginrUser,
  getCurrentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginrUser);

router.get("/current", getCurrentUser);

module.exports = router;
