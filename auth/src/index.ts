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

  // Since the db in docker will take some time to boot up (even if docker thinks it is running)
  // We need to add this 'retry logic' to give the db time to be avilable for the TypeOrm to connect.
  let retries = 8;
  while (retries > 0) {
    try {
      await createConnection();
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // sleep for 5 seconds
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

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

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
})();
