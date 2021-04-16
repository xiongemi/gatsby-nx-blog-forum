import { store } from '../store/root/root.store';
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { reactReduxFirebaseProps } from '../models/react-redux-firebase-props';

export const WrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        {element}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default WrapWithProvider;
