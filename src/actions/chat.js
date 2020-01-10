import { Chat } from '../client';
import { SET_UNREAD_CHATS_COUNT } from '../constants/chats';
import { isAuthenticatedSelector as getUserAuthenticated } from '../selectors';

export const setUnreadChatsCount = unreadCount => ({ type: SET_UNREAD_CHATS_COUNT, unreadCount });

export const startUnreadChatsCountScheduling = (updateDelay = 1000 * 10, onError) => (
  dispatch,
  getState
) => {
  let timeout;

  async function updateAndDefer() {
    try {
      const userAuthenticated = getUserAuthenticated(getState());
      if (userAuthenticated) {
        const { count } = await Chat.getUnreadMessagesCount();
        dispatch(setUnreadChatsCount(count));
      }
    } catch (err) {
      if (onError) {
        onError(err);
      }
    } finally {
      timeout = setTimeout(updateAndDefer, updateDelay);
    }
  }

  function stop() {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  updateAndDefer();
  return stop;
};
