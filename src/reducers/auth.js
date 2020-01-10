import { SET_CURRENT_USER } from '../constants/auth';

const initialState = {
  isAuthenticated: false,
  currentUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
