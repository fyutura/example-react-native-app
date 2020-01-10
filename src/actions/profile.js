import { Profile } from '../client';
import { setCurrentUser } from './auth';

// eslint-disable-next-line import/prefer-default-export
export const updateUser = data => async dispatch => {
  const profile = await Profile.updateMe(data);
  return dispatch(setCurrentUser(profile));
};
