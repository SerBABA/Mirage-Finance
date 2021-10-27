import { AuthenticationError } from "apollo-server-errors";
import { verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { ExpressContext } from "../types/ExpressContext";

// Token format
// "SERVER_ID token"

export const isAuth: MiddlewareFn<ExpressContext> = ({ context }, next) => {
  const accessToken: string | undefined = context.req.headers.authorization;
  console.log(accessToken);

  if (!accessToken) {
    throw new AuthenticationError("Missing access token or invalid.");
  }

  try {
    const token: string = accessToken.split(" ")[1];
    const payload = verify(token, process.env.JWT_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log("EXPIRED");
    throw new AuthenticationError("Missing access token or invalid.");
  }

  return next();
};
