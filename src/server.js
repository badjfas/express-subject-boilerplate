import express from "express";
import mysql from "mysql";
import "./sequelize";

const storageConnection = mysql.createConnection({
  host: "localhost", // 로컬
  user: "root", // 디비 아이디
  password: "1111qqqq", // 디비 비밀번호
  port: 3306,
  database: "subject", // mysql 스키마 이름
  timezone: "+09:00",
  dateStrings: "date",
});

storageConnection.connect((err) => {
  if (err) {
    return;
  }
  storageConnection.end();
});

const router = require("./api/index");

const app = express(); //express 사용

app.use("/", router);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
