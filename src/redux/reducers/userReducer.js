import { user_action_types } from '../types';
const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_action_types.CREATE_USER_PROFILE:
      return { ...state, currentUser: action.payload };
    case user_action_types.USER_SIGNED_OUT:
      return { ...state, currentUser: action.payload };
    case user_action_types.SIGNIN_FAILURE:
      return { ...state, signInError: action.payload };
    case user_action_types.SIGNIN_SUCCESS:
      return { ...state, signInError: null };
    case user_action_types.SIGNUP_FAILURE:
      return { ...state, signUpError: action.payload };
    case user_action_types.SIGNUP_SUCCESS:
      return { ...state, signUpError: null };
    default:
      return state;
  }
};
