const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "./dev.sqlite",
    dialect: "sqlite",
  }
);

module.exports = sequelize;
