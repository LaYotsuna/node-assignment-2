const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("You got to the first middleware succesufully");
  res.send("<h1>Redirecting to users...</h1>");
  setTimeout(next(), 3000);
});

app.use("/users", (req, res, next) => {
  console.log("You got to the second middleware succesufully");
  res.send("<h1>You have nmo users yet!</h1>");
});

app.listen(3000);
