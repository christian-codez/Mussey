import { user_action_types } from '../types';
import { firestore } from '../../firebase/firebase.util';
import firebase from 'firebase';

export const createUserProfile = (userAuth, additionalData = {}) => {
  return async dispatch => {
    try {
      if (!userAuth) return;

      const userRef = await firestore.doc(`users/${userAuth.uid}`);
      const userSnapshot = await userRef.get();
      if (!userSnapshot.exists) {
        //configure new user object
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        //try to create the user
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            photoURL,
          });
        } catch (error) {
          console.log('User creation error ', error);
        }
      }

      userRef.onSnapshot(snapshot => {
        dispatch({
          type: user_action_types.CREATE_USER_PROFILE,
          payload: { id: snapshot.id, ...snapshot.data() },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const signIn = userAuth => {
  return async dispatch => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(userAuth.email, userAuth.password);
      dispatch({ type: user_action_types.SIGNIN_SUCCESS });
    } catch (error) {
      dispatch({
        type: user_action_types.SIGNIN_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };
};
export const signUp = userAuth => {
  const { displayName } = userAuth;
  return async dispatch => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(userAuth.email, userAuth.password);

      dispatch({
        type: user_action_types.CREATE_USER_PROFILE,
        payload: { id: user.uid },
      });

      const userData = {
        displayName,
        email: user.email,
        createdAt: new Date(),
        photoURL: '',
      };

      await firestore.collection('users').doc(user.uid).set(userData);

      dispatch({
        type: user_action_types.CREATE_USER_PROFILE,
        payload: { id: user.id, ...userData },
      });
      dispatch({ type: user_action_types.SIGNUP_SUCCESS });
    } catch (error) {
      dispatch({
        type: user_action_types.SIGNUP_FAILURE,
        payload: error.message,
      });
      console.log(error);
    }
  };
};
export const userSignOut = () => {
  return async dispatch => {
    try {
      dispatch({
        type: user_action_types.USER_SIGNED_OUT,
        payload: null,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
