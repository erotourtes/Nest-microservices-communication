import { Injectable } from '@nestjs/common';

type Author = {
  id: number;
  firstName: string;
  lastName: string;
};

type Post = {
  id: number;
  authorId: number;
  title: string;
  votes: number;
};

const authors: Author[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
  },
];
const posts: Post[] = [
  {
    authorId: 1,
    id: 1,
    title: 'Post 1',
    votes: 0,
  },
  {
    authorId: 1,
    id: 2,
    title: 'Post 2',
    votes: 2,
  },
];

@Injectable()
export class Repository {
  getAuthorById(id: number): Author | null {
    return authors.find((a) => a.id === id) || null;
  }

  getAuthorPosts(authorId: number): Post[] {
    return posts.filter((p) => p.authorId === authorId);
  }

  upvotePostById(postId: number): Post | null {
    const post = posts.find((p) => p.id === postId);
    if (!post) return null;
    post.votes++;
    return post;
  }
}
