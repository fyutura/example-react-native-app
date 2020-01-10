import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/plans', { params }));

export const create = data => unify(api.post('/plans', data));

export const update = (id, data) => unify(api.put(`/plans/${id}`, data));

export const getOne = id => unify(api.get(`/plans/${id}`));

export const del = id => unify(api.delete(`/plans/${id}`));
