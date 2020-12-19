import Sequelize from "sequelize";
const db = {};
const sequelize = new Sequelize(
    "capstone", // 데이터베이스 이름
    "bjwkor", // 유저 명
    "bjwkor", // 비밀번호
    {
        host: "218.232.72.231",
        dialect: "mysql", // 사용할 데이터베이스 종류
        dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true }, // 날짜의 경우 문자열로 타입 변경 처리
        timezone: "+09:00" // 타임존을 설정
    }
);

db.User = require("./User")(sequelize, Sequelize);
db.Post = require("./Post")(sequelize, Sequelize);
db.Like = require("./Like")(sequelize, Sequelize);
db.Comment = require("./Comment")(sequelize, Sequelize);
db.Follow = require("./Follow")(sequelize, Sequelize);
db.ChildComment = require("./ChildComment")(sequelize, Sequelize);
db.Department = require("./Department")(sequelize, Sequelize);
db.ChatRoom = require("./ChatRoom")(sequelize, Sequelize);
db.Message = require("./Message")(sequelize, Sequelize);
db.Notifications = require("./Notifications")(sequelize, Sequelize);
db.GroupChatRoom = require("./GroupChatRoom")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log("🚀 Sequelize ready");

module.exports = db;
