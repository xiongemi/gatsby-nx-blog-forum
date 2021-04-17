import React from 'react';
import { Redirect } from '@reach/router';

export function Index() {
  return <Redirect noThrow to="/posts" />;
}

export default Index;
