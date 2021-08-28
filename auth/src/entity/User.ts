import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity("users")
// BaseEntity adds the .save and .find handlers similar to JPA.
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // Used to expose aspects of a entity
  @Column("text", { unique: true }) // defines a db column
  username: string;

  @Column("text")
  password: string;
}
