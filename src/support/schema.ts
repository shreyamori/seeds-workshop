import './firebase';

import type { Typesaurus } from 'typesaurus';
import { schema } from 'typesaurus';

type User = {
  name: string;
  username: string;
  profilePictureUrl: string;
  createdAt: string;
  updatedAt: string;
};

type Post = {
  userId: string;
  imageUrl: string;
  caption: string;
  createdAt: string;
  updatedAt: string;
};

export const db = schema(($) => ({
  users: $.collection<User>(),
  posts: $.collection<Post>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;
