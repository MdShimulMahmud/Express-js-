const express = require("express");
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");
const path = require("path");
const multer = require("multer");
const { MulterError } = require("multer");

const app = express();

const upload_folder = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, upload_folder);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    // console.log(file);
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .jpeg and .png format are allowed!"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only .pdf format are allowed!"));
      }
    } else {
      cb(new Error("There was an internal error!"));
    }
  },
});

// app.use("/", publicRouter);
// app.use("/admin", adminRouter);

app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
    res.send("File uploaded!");
  }
);

app.use((err, req, res, next) => {
  if (err) {
    if (err.message instanceof MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.status(200).send("Success!");
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000!`);
});
