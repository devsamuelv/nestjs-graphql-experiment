import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { join } from 'path';
import { TestResolver } from './test/test.resolver';
import { AuthorResolver } from './authors/authors.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: true
    })
  ],
  providers: [TestResolver, AuthorResolver],
})
export class AppModule { }
