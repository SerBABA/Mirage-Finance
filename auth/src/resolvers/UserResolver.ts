import { User } from "./../entity/User";
import { Mutation, Query, Resolver, Arg, ObjectType, Field, Ctx } from "type-graphql";
import * as argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { randomBytes } from "crypto";
import { UserContext } from "types/UserContext";

// Defining a response type for the resolver login
@ObjectType()
class LoginResponse {
  @Field(() => String)
  accessToken: string;
}

/**
 * Graphql resolver for the user entities
 */
@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  // User[] is equivalent to [User]
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { res }: UserContext
  ): Promise<LoginResponse> {
    // check the user exists
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw new Error("invalid login");
    }

    // Verify password
    const isValid = await argon2.verify(user.password, password);

    if (!isValid) {
      throw new Error("invalid login");
    }

    // successfully loged in
    res.cookie("kid", "", { httpOnly: true });

    return {
      accessToken: sign({ userId: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: "15m",
      }),
    };
  }

  @Mutation(() => Boolean)
  async register(
    // @Arg('graphql_name', () => obj_type ) variable_name: ts_type
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string
  ) {
    try {
      // Using argon2 to generate a hash a 16 bytes salt
      const salt: Buffer = randomBytes(16);
      const hashedPassword: string = await argon2.hash(password, { salt: salt });

      await User.insert({
        username,
        password: hashedPassword,
      });
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }
}
