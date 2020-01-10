import api from './api';
import unify from './api/unify';

export const getMe = () => unify(api.get('/users/profile'));

export const updateMe = formData => unify(api.put('/users/profile', formData));

export const updatePassword = data => unify(api.post('/users/profile/password', data));

export const delMe = () => unify(api.delete('/users/profile'));

export const getOne = id => unify(api.get(`/users/${id}/profile`));
