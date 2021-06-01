import Sequelize from "sequelize";
const db = {};
const sequelize = new Sequelize(
  "subject", // 데이터베이스 스키마
  "root", // 아이디
  "1111qqqq", // 비밀번호
  {
    host: "localhost",
    dialect: "mysql", // 사용할 데이터베이스 종류
    dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
    timezone: "+09:00",
  }
);

db.Todo = require("./Todo")(sequelize, Sequelize);
db.TodoGroup = require("./TodoGroup")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();

module.exports = db;
