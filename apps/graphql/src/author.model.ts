import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];
}

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  authorId: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  votes?: number;
}
