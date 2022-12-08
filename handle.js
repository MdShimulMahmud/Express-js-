const handle = (req, res) => {
  res.send("Hello World!");
  console.log(req.app.locals.title);
};
module.exports = handle;
