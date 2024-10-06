const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajesh:smart@devx.vkck9.mongodb.net/devx"
  );
};

module.exports = connectDB;
