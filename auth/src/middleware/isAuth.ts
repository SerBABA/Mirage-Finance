import { AuthenticationError } from "apollo-server-errors";
import { verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { ExpressContext } from "../types/ExpressContext";

// "SERVER_ID token"

export const isAuth: MiddlewareFn<ExpressContext> = ({ context }, next) => {
  const accessToken: string = context.req.cookies[process.env.ACCESS_NAME!];

  if (!accessToken) {
    throw new AuthenticationError("Missing access token or invalid.");
  }

  try {
    const token: string = accessToken.split(" ")[1];
    const payload = verify(token, process.env.JWT_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw new AuthenticationError("Missing access token or invalid.");
  }

  return next();
};
