require("dotenv").config({ path: '.env' });

// const mysqlHost = process.env.DB_HOST || 'localhost';
// const mysqlPort = process.env.DB_PORT || 3306;
// const mysqlUser = process.env.DB_USER || 'root';
// const mysqlPassword = process.env.DB_PASSWORD || '';
// const mysqlDbName = process.env.DB_NAME || 'skyshi_backend_test';

const mysqlHost = process.env.MYSQL_HOST || 'localhost';
const mysqlPort = process.env.DB_PORT || 3306;
const mysqlUser = process.env.MYSQL_USER || 'root';
const mysqlPassword = process.env.MYSQL_PASSWORD || '';
const mysqlDbName = process.env.MYSQL_DBNAME || 'skyshi_backend_test';

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