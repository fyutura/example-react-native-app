import api from './api';
import unify from './api/unify';

export const signUp = data => unify(api.post('/auth/signup', data));

export const login = data => unify(api.post('/auth/login', data));

export const googleCallback = queryCode => unify(api.get(`/auth/google/callback${queryCode}`));

export const facebookCallback = queryCode => unify(api.get(`/auth/facebook/callback${queryCode}`));

export const requestRecoverPassword = data => unify(api.post('/auth/password', data));

export const getTokenValidity = data => unify(api.get('/auth/password', data));

export const changePassword = data => unify(api.put('/auth/password', data));
