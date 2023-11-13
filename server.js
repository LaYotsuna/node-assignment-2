const express = require("express");

const app = express();

// The path needs the more specific middleware first
app.use("/users", (req, res, next) => {
  console.log("You got to the second middleware successfully");
  res.send("This is the users server.");
});

// The path needs the less specific middleware at last
app.use("/", (req, res, next) => {
  console.log("You got to the first middleware successfully");
  res.send("This is just the generic server.");
});

app.listen(3000);
