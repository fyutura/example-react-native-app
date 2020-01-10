import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/users', { params }));

export const create = data => unify(api.post('/users', data));

export const update = (id, data) => unify(api.put(`/users/${id}`, data));

export const getOne = id => unify(api.get(`/users/${id}`));

export const del = id => unify(api.delete(`/users/${id}`));

export const block = id => unify(api.put(`/users/block/${id}`));
