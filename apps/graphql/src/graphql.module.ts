import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthorResolver } from 'apps/graphql/src/author.resolver';
import { Repository } from 'apps/graphql/src/author.repository';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'apps/graphql/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [Repository, AuthorResolver],
})
export class GraphqlModule {}
