const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const { validateProfileEditData } = require("../utils/validation");
const User = require("../models/user");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.json({ data: user });
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateProfileEditData(req)) {
      throw new Error("Invalid Edit Request");
    }
    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    // console.log(loggedInUser);
    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});
//Rajesh-TODO
profileRouter.patch("/profile/forgot-password", userAuth, async (req, res) => {
  try {
    const currentPassword = req.body;
    const user = new User(currentPassword);
    const isPasswordValid = await user.validatePassword(currentPassword);
    console.log(isPasswordValid);
    res.send("Password updated");
  } catch (err) {
    res.status(400).send("Error:- " + err.message);
  }
});

module.exports = profileRouter;
