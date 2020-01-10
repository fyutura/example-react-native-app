import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/locations', { params }));

export const create = data => unify(api.post('/locations', data));

export const update = (id, data) => unify(api.put(`/locations/${id}`, data));

export const getOne = id => unify(api.get(`/locations/${id}`));

export const del = id => unify(api.delete(`/locations/${id}`));
