import { User } from "entity/User";
import { Session } from "../entity/Session";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
  const token = sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "5m",
  });
  return `${process.env.SERVER_ID!} ${token}`;
};

export const createRefreshToken = async (user: User) => {
  let newSession: Session = new Session();
  newSession.user = user;
  newSession = await newSession.save();
  return newSession.id;
};
