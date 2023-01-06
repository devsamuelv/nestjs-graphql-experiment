import { Module } from "@nestjs/common";
import { AuthorResolver } from "./authors.resolver";


@Module({
  imports: [],
  providers: [AuthorResolver]
})
export class AuthorsModule { }