import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "./models/author.model";
import { UseGuards } from "@nestjs/common";
import { AuthorsGuard } from "./authors.guard";


@Resolver()
export class AuthorResolver {
  constructor() { }

  @UseGuards(AuthorsGuard)
  @Query(returns => Author, { name: "getAuthor", description: "Creates a new author object based on the id input." })
  async author(@Args("id", { type: () => Int, description: "The author id." }) id: number) {
    return { id: id, firstName: "hello", lastName: "jeff" } satisfies Author;
  }

  @Mutation(returns => Author, { name: "getAuthor", description: "Mutates author object based on the id input." })
  async mutAuthor(@Args("id", { type: () => Int, description: "The author id." }) id: number) {
    return { id: id, firstName: "hello", lastName: "jeff" } satisfies Author;
  }
}