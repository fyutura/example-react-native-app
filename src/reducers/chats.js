import { SET_UNREAD_CHATS_COUNT } from '../constants/chats';

const initialState = {
  unreadCount: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_UNREAD_CHATS_COUNT:
      return {
        ...state,
        unreadCount: action.unreadCount,
      };

    default:
      return state;
  }
};
