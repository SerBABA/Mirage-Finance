import { User } from "./../entity/User";
import { Mutation, Query, Resolver, Arg, Ctx, UseMiddleware } from "type-graphql";
import * as argon2 from "argon2";
import { randomBytes } from "crypto";
import { ExpressContext } from "../types/ExpressContext";
import { createAccessToken, createRefreshToken } from "./../utilities/createToken";
import { isAuth } from "../middleware/isAuth";
import { Session } from "./../entity/Session";

// Defining a response type for the resolver login
// @ObjectType()
// class LoginResponse {
//   @Field(() => String)
//   accessToken: string;
// }

/**
 * Graphql resolver for the user entities
 */
@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hello world!";
  }

  // User[] is equivalent to [User]
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: ExpressContext) {
    return `Bye user with id ${payload!.userId}`;
  }

  /**
   * Logs the user out of there session. This may take some time for the access token
   * to also expire. But they cannot refresh the token.
   *
   * @param context Contains the payload of the access token
   * @returns
   */
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async Logout(@Ctx() { payload, res }: ExpressContext): Promise<boolean> {
    const user: User | undefined = await User.findOne({ where: { id: payload!.userId } });

    if (!user) {
      console.error(`User id ${payload!.userId} provided to logout is invalid`);
      throw new Error("Failed to logout");
    }

    const result = await Session.delete({ user: user });

    if (result.affected != null && result.affected != undefined && result.affected <= 0) {
      console.error(`User ${user.id} was already logged out.`);
      throw new Error("User is already logged out.");
    }

    res.cookie(process.env.REFRESH_NAME!, "none", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 0,
    });

    res.cookie(process.env.ACCESS_NAME!, "none", {
      sameSite: "none",
      secure: true,
      maxAge: 0,
    });

    return true;
  }

  /**
   * A login mutation allowing for loggin in to a user account. Creates a session and access token
   * for the user.
   *
   * @param username The username of the requesting user
   * @param password The password of the requesting user
   * @param context The UserContext of the express request
   * @returns {boolean} true if the user successfully loged in & adds a access and refresh token
   * to the res.cookies. Otherwise an error is thrown or false.
   */
  @Mutation(() => Boolean)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { res }: ExpressContext
  ): Promise<boolean> {
    // check the user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.error(`Attempt to login into user, with non existant username ${username}.`);
      throw new Error("invalid login");
    }

    // Verify password
    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      console.error(`Attempt to login into user ${user.id}. But invalid password.`);
      throw new Error("invalid login");
    }

    // successfully loged in & create the cookies
    res.cookie(process.env.REFRESH_NAME!, await createRefreshToken(user), {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.cookie(process.env.ACCESS_NAME!, createAccessToken(user), {
      sameSite: "none",
      secure: true,
    });

    return true;
  }

  @Mutation(() => Boolean)
  async register(
    // @Arg('graphql_name', () => obj_type ) variable_name: ts_type
    @Arg("username", () => String) username: string,
    @Arg("fname", () => String) fname: string,
    @Arg("lname", () => String) lname: string,
    @Arg("password", () => String) password: string
  ) {
    // check the user exists
    const user = await User.findOne({ where: { username } });

    if (user) {
      throw new Error("username in use");
    }

    try {
      // Using argon2 to generate a hash a 16 bytes salt
      const salt: Buffer = randomBytes(16);
      const hashedPassword: string = await argon2.hash(password, { salt: salt });

      await User.insert({
        username,
        fname,
        lname,
        password: hashedPassword,
      });
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }
}
