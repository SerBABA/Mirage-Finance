import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

/**
 * Defines a User object (for db)
 */
@ObjectType()
@Entity("users")
// BaseEntity adds the .save and .find handlers similar to JPA.
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field(() => String) // Used to expose aspects of a entity
  @Column("text", { unique: true, nullable: false }) // defines a db column
  username: string;

  @Field(() => String)
  @Column("text", { nullable: false })
  fname: string;

  @Field(() => String)
  @Column("text", { nullable: false })
  lname: string;

  @Column("text", { nullable: false })
  password: string;
}
