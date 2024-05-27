import {
  Args,
  ArgsType,
  Field,
  InputType,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author, Post } from 'apps/graphql/src/author.model';
import { Repository } from 'apps/graphql/src/author.repository';
import { IsInt, IsString, MinLength } from 'class-validator';

@ArgsType()
class GetAuthorArgs {
  @Field({ nullable: true, defaultValue: 'some' })
  @IsString()
  @MinLength(3)
  firstName: string;

  @Field(() => Int)
  @IsInt()
  id: number;
}

// for complex input types
@InputType()
class UpvotePostInput {
  @Field(() => Int)
  @IsInt()
  postId: number;

  @Field()
  @IsString()
  @MinLength(3)
  msg: string;
}

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly repository: Repository) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs) {
    console.log(args);
    return this.repository.getAuthorById(args.id);
  }

  @ResolveField(() => [Post])
  async posts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author;
    return this.repository.getAuthorPosts(id);
  }

  /*
  Inside query editor, run the following query:
  mutation Name {
    upvotePost(upvotePostInput: {postId: 1}) {
      id
      votes
    }
  }
  
  */

  @Mutation(() => Post)
  async upvotePost(@Args('input') args: UpvotePostInput) {
    console.log(args);
    return this.repository.upvotePostById(args.postId);
  }
}
