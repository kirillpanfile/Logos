const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./routes/auth");
const admin = require("./routes/admin");
const product = require("./routes/product");
const multer = require("multer");
const path = require("path");
// config
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//connect to db
(async function () {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
})();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/product", product);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
