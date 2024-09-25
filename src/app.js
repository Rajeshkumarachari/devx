const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middleware/auth.js");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port->7777...!");
});
