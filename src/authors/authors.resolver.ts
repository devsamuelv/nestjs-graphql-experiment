import { Args, Int, Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Author } from "./models/author.model";


@Resolver()
export class AuthorResolver {
  constructor() { }

  @Query(returns => Author)
  async author(@Args("id", { type: () => Int }) id: number) {
    return { id: id, firstName: "hello", lastName: "jeff" } satisfies Author;
  }
}