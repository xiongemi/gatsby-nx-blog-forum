import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { RootState } from '../models/root-state';
import { FbPost } from '@gatsby-blog-nx/models';
import { Post } from '@gatsby-blog-nx/shared-ui';

export function Posts() {
  useFirestoreConnect([{ collection: 'posts' }]);
  const posts: FbPost[] =
    useSelector<RootState, FbPost[]>(
      (state: RootState): FbPost[] => state.firestore?.ordered?.posts
    ) || [];

  return (
    <>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </>
  );
}

export default Posts;
