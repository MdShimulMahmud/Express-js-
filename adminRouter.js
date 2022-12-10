const express = require("express");

const adminRouter = express.Router();

// adminRouter.all("*", (req, res) => {
//   res.send("All admin router");
// });

adminRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  next();
});

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

adminRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
});

module.exports = adminRouter;
