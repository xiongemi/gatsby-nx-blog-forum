import { FbPost } from '@gatsby-blog-nx/models';

export interface RootState {
  firestore: {
    ordered: {
      posts: FbPost[];
    };
  };
}
