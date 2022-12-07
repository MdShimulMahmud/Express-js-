const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("There is no body here!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Home page ");
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
