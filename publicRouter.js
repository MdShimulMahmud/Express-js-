const express = require("express");

const publicRouter = express.Router();

publicRouter.get("/", (req, res, next) => {
  res.send("Public Home Page!");
  next();
});

publicRouter.get("/about", (req, res) => {
  res.send("Home page");
});

module.exports = publicRouter;
