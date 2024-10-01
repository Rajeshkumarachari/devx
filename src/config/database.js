const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajesh:smart@newdevx.3slfz.mongodb.net/devx"
  );
};

module.exports = connectDB;
