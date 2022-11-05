const dbConfig = require("../config/db.config");
const mysql = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.password,
});
connection.connect();
connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log(`Connection has been established successfully`))
  .catch((err) => console.error(`Unable to connect to the database: ${err}`));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.activity = require("./activity.model")(sequelize, DataTypes);
db.todo = require("./todo.model")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Drop and Resync with { force: false}"))
  .catch((err) => console.log(`Error: ${err}`));

db.activity.hasMany(db.todo, { foreignKey: "activity_group_id", as: "todos" });

module.exports = db;
