require("dotenv").config();

const mysqlHost = process.env.MYSQL_HOST || 'localhost';
const mysqlPort = process.env.MYSQL_PORT || 3306;
const mysqlUser = process.env.MYSQL_USER || 'root';
const mysqlPassword = process.env.MYSQL_PASS || '';
const mysqlDbName = process.env.MYSQL_DB || 'skyshi_backend_test';

module.exports = {
  HOST: mysqlHost,  
  USER: mysqlUser,
  PASSWORD: mysqlPassword,
  DB: mysqlDbName,
  PORT: mysqlPort,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
}