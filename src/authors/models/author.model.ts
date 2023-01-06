import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AuthorsMiddleware } from "../authors.middleware";

@ObjectType()
export class Author {
  @Field(type => Int, { middleware: [AuthorsMiddleware] })
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}