const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'xxx':
      return { ...state };
    default:
      return state;
  }
};
