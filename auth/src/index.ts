import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { handleRefreshTokens } from "./controller";
import { corsConfig } from "./config/CorsConfig";
import cors from "cors";

(async () => {
  const app = express();
  app.use(cookieParser());
  app.use(cors(corsConfig()));

  app.get("/", (_req, res) => res.send("Hello world"));
  app.post("/refresh_tokens", handleRefreshTokens);

  await createConnection();

  // Using the Apollo server we create a middleware of resolvers and queries
  const apolloServer = new ApolloServer({
    // builds the query and resolver schema for the ApolloServer
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: corsConfig() });

  app.listen(5000, () => {
    console.log(`Server started on port ${5000}`);
  });
})();
