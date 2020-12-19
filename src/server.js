import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import logger from "morgan";
import express from "express";
import mysql from "mysql";
import "./sequelize";
const server = new ApolloServer({
    schema: schema,
    context: ({ res, req }) => {
        return {
            req,
            res,
            user: {
                id: 1
            }
        };
    },
    introspection: true
});

/* Mysql 저장소 연결 */
const storageConnection = mysql.createConnection({
    host: "218.232.72.231",
    user: "bjwkor",
    password: "bjwkor",
    port: 3306,
    database: "capstone", //Mysql schema
    timezone: "+09:00", // 한국 시간
    dateStrings: "date" // 시간
});

storageConnection.connect(err => {
    if (err) {
        return;
    }
    storageConnection.end();
});

const opt = {
    port: process.env.PORT || 4001
};

const app = express(); //express 사용

app.use(logger("dev")); // 콘솔에 로그찍히는 모듈
server.applyMiddleware({ app }); //아폴로 서버에 express 적용;

app.listen({ ...opt }, () => console.log(`🚀 Server ready at http://localhost:${opt.port}${server.graphqlPath}`));
