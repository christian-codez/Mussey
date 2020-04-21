import { user_action_types } from '../types';
import { firestore } from '../../firebase/firebase.util';

export const createUserProfile = (userAuth, additionalData) => {
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
            ...additionalData,
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
