import { user_action_types } from '../types';
const INITIAL_STATE = {
  currentUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_action_types.CREATE_USER_PROFILE:
      return { ...state, currentUser: action.payload };
    case user_action_types.USER_SIGNED_OUT:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
