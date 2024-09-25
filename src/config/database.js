const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajesh:smartrabbit@devx.bdixn.mongodb.net/devx"
  );
};

module.exports = connectDB;
