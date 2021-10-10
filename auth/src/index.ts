import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { handleRefreshTokens } from "./controller";
import { corsConfig } from "./config/CorsConfig";
import cors from "cors";
import { initApolloServer } from "./config/initApollo";
import { KafkaHandler, kafkaTopics } from "./config/KafkaInit";

(async () => {
  const app = express();
  app.use(cookieParser());
  app.use(cors(corsConfig()));

  app.get("/", (_req, res) => res.send("Hello world"));
  app.post("/refresh_tokens", handleRefreshTokens);

  const kafkaHandler = new KafkaHandler();
  kafkaHandler.producer.on("ready", () => {
    kafkaHandler.produce(kafkaTopics.test, "Hello", "world!");
  });

  const apolloServer = await initApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: corsConfig() });

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
})();
