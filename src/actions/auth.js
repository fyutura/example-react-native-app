import jwtDecode from 'jwt-decode';

import { SET_CURRENT_USER } from '../constants/auth';
import setAuthToken from '../setAuthToken';
import { Auth, Profile } from '../client';

export const setCurrentUser = decoded => ({ type: SET_CURRENT_USER, payload: decoded });

export const getUserProfile = () => async dispatch => {
  const profile = await Profile.getMe();
  dispatch(setCurrentUser(profile));
  return profile;
};

export const completeRegistration = profileData => async dispatch => {
  const profile = await Profile.updateMe(profileData);
  dispatch(setCurrentUser(profile));
  return profile;
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser(null));
};

export const authResetPassword = recData => async () => {
  await Auth.requestRecoverPassword(recData);
};

export const setNewPassword = data => async () => {
  await Auth.changePassword(data);
};

export const authGoogleCallback = queryCode => async dispatch => {
  const { token, ...user } = await Auth.googleCallback(queryCode);
  setAuthToken(token);
  const decoded = jwtDecode(token);
  dispatch(setCurrentUser({ decoded, ...user }));
  return token;
};

export const getUser = token => async dispatch => {
  setAuthToken(token);
  const profile = await Profile.getMe();
  return dispatch(setCurrentUser(profile));
};

export const loginUser = logData => async dispatch => {
  const { token, ...user } = await Auth.login(logData);
  setAuthToken(token);
  dispatch(setCurrentUser(user));
  return token;
};

export const registerUser = regData => async dispatch => {
  const { token, ...user } = await Auth.signUp(regData);
  setAuthToken(token);
  const decoded = jwtDecode(token);
  dispatch(setCurrentUser({ decoded, ...user }));
  return token;
};
