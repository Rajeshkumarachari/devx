const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxLength: 30,
      minLength: 4,
      trim: true,
    },
    lastName: {
      type: String,
      maxLength: 30,
      minLength: 4,
    },
    emailId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
    },
    age: {
      type: Number,
      min: 15,
      trim: true,
    },
    gender: {
      type: String,
      lowercase: true,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      trim: true,
      default: "https://geographyandyou.com/images/user-profile.png",
    },
    about: { type: String, default: "This is a default about of the user...!" },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
