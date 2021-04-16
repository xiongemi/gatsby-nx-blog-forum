import React from 'react';
import { FbPost } from '@gatsby-blog-nx/models';
import { Card, CardContent, Typography } from '@material-ui/core';

export const Post: React.FC<FbPost> = (props: FbPost) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
