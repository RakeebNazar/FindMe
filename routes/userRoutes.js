const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const catchAsync = require("./../utils/catchAsync");

const router = express.Router();

router.get("/isLoggedin", authController.isLoggedIn);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/getScores", userController.getScores);
router.post("/uploadScore", userController.uploadScore);

module.exports = router;
