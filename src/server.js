import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import logger from "morgan";
import express from "express";
const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => {},
    introspection: true
});
const opt = {
    port: process.env.PORT || 4001
};
const app = express(); //express 사용
app.use(logger("dev")); // 콘솔에 로그찍히는 모듈

server.applyMiddleware({ app }); //아폴로 서버에 express 적용;

app.listen({ ...opt }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
