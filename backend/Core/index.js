const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database");
const User = require("../Models/User");

//* Sync database with models
sequelize.sync().then(() => {
  console.log("Database is synced");
});

//* Initialize express
const app = express();
app.use(express.json());

//* Load environment variables
dotenv.config();

app.post("/users", (req, res) => {
  const { username, password, email } = req.body;
  User.create({ username, password, email }).then((user) => {
    res.json(user);
  });
});

//* Listen on port
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
