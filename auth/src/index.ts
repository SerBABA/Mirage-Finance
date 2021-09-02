import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { Session } from "./entity/Session";
import { createAccessToken } from "./utilities/createToken";
import { TokenExpiredError, verify } from "jsonwebtoken";

(async () => {
  const app = express();
  app.use(cookieParser());

  app.get("/", (_req, res) => res.send("Hello world"));

  app.post("/refresh_tokens", async (req, res) => {
    const refresh_token: string | undefined = req.cookies[process.env.REFRESH_NAME!];
    const access_token: string | undefined = req.cookies[process.env.ACCESS_NAME!];

    // Check if the session token exists.
    if (!refresh_token) {
      console.error("No refresh token provided.");
      return res.status(401).send({ ok: false, accessToken: "" });
    }

    // Check if the access token exists
    if (!access_token) {
      console.error("No access token provided by user.");
      return res.status(401).send({ ok: false, accessToken: "" });
    }

    // Check that the access token is valid but expired.
    try {
      verify(access_token, process.env.JWT_SECRET!);

      // if it makes it past this section it is still valid.
      console.error("Access token is still valid.");
      return res.status(401).send({ ok: false, accessToken: "" });
    } catch (err) {
      // ensure that the error thrown is the expired option.
      if (!(err instanceof TokenExpiredError)) {
        console.error(err);
        return res.status(401).send({ ok: false, accessToken: "" });
      }
    }

    // Check if the session is valid.
    let session: Session | undefined = undefined;
    try {
      session = await Session.findOneOrFail(refresh_token);
      if (!session) throw new Error("");
    } catch (err) {
      console.error(`Session ${refresh_token} is not present.`);
      return res.status(403).send({ ok: false, accessToken: "" });
    }

    return res.status(200).send({ ok: true, accessToken: createAccessToken(session.user) });
  });

  const corsOptions = {
    origin: ["https://studio.apollographql.com"],
    credentials: true,
  };

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
  apolloServer.applyMiddleware({ app, cors: corsOptions });

  app.listen(5000, () => {
    console.log(`Server started on port ${5000}`);
  });
})();

// createConnection()
//   .then(async (connection) => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");
//   })
//   .catch((error) => console.log(error));
