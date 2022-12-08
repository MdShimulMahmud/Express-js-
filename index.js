const express = require("express");
const handle = require("./handle");
const app = express();

// const admin = express();

// const router = express.Router({
//   caseSensitive: false,
// });

// app.locals.title = "my application";
const PORT = 3000;

// app.use(router);
app.use(express.urlencoded());
app.use(express.json());
app.set("view engine", "ejs");
app
  .route("/")
  .get((req, res) => {
    res.render("index");
  })
  .post((req, res) => {
    res.send("This is home post");
  })
  .put((req, res) => {
    res.send("This is home put");
  })
  .delete((req, res) => {
    res.send("This is home delete");
  });

// app.param("id", (req, res, next, id) => {
//   /// habijabi kisu korbe ja body te send hbe
//   const user = {
//     userid: id,
//     name: "bangladesh",
//   };

//   req.userDetails = user;
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.userDetails);
//   res.send("I am from Pabna ");
// });
// app.all("/", (req, res) => {
//   res.send("Hello guys!");
// });

// app.use(
//   express.static(`${__dirname}/public/`, {
//     index: "home.html",
//   })
// );

// router.get("/", (req, res) => {
//   res.send("There is no body here!");
//   console.log(app.locals.title);
// });

// admin.on("mount", function (parent) {
//   console.log("Admin Mounted");
//   console.log(parent); // refers to the parent app
// });

// admin.get("/dashboard", (req, res) => {
//   console.log(admin.mountpath);
//   res.send("Welcome to admin a dashboard panel!");
// });

// admin.get("/", (req, res) => {
//   console.log(admin.mountpath);
//   res.send("Welcome to admin panel!");
// });

// app.use("/admin", admin);

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("Home page ");
// });

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
