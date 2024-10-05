const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajesh:smart@devxapp.shgwr.mongodb.net/devx"
  );
};

module.exports = connectDB;
