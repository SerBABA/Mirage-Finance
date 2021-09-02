import { Request, Response } from "express";
import { Session } from "./entity/Session";
import { createAccessToken } from "./utilities/createToken";
import { TokenExpiredError, verify } from "jsonwebtoken";

export const handleRefreshTokens = async (req: Request, res: Response) => {
  const refresh_token: string | undefined = req.cookies[process.env.REFRESH_NAME!];
  const access_cookie: string | undefined = req.cookies[process.env.ACCESS_NAME!];

  // Check if the session token exists.
  if (!refresh_token) {
    console.error("No refresh token provided.");
    return res.status(401).send({ ok: false });
  }
  console.log(req.cookies);
  if (!access_cookie) {
    console.error("No access cookie provided.");
    return res.status(401).send({ ok: false });
  }

  const access_token = access_cookie.split(" ")[1];

  // Check if the access token exists
  if (!access_token) {
    console.error("No access token provided by user.");
    return res.status(401).send({ ok: false });
  }

  // Check that the access token is valid but expired.
  try {
    verify(access_token, process.env.JWT_SECRET!);

    // if it makes it past this section it is still valid.
    console.error("Access token is still valid.");
    return res.status(401).send({ ok: false });
  } catch (err) {
    // ensure that the error thrown is the expired option.
    if (!(err instanceof TokenExpiredError)) {
      console.error(err);
      return res.status(401).send({ ok: false });
    }
  }

  // Check if the session is valid.
  let session: Session | undefined = undefined;
  try {
    session = await Session.findOneOrFail(refresh_token);
    if (!session) throw new Error("");
  } catch (err) {
    console.error(`Session ${refresh_token} is not present.`);
    return res.status(403).send({ ok: false });
  }

  res.cookie(process.env.ACCESS_NAME!, createAccessToken(session.user), {
    sameSite: "none",
    secure: true,
  });

  return res.status(200).send({ ok: true });
};
