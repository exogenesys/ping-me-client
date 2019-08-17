import * as firebase from 'firebase';

import FirebaseConfig from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const subscribeTo = firebase.functions().httpsCallable('subscribeTo');
export const unSubscribeTo = firebase.functions().httpsCallable('unSubscribeTo');
export const getSubscriptionData = firebase.functions().httpsCallable('getSubscriptionData');
