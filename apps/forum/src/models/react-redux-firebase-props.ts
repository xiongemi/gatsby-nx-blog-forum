import firebase from 'gatsby-plugin-firebase';
import { reactReduxFirebaseConfig } from './react-redux-firebase-config';
import { store } from '../store/root/root.store';
import { createFirestoreInstance } from 'redux-firestore';

export const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
