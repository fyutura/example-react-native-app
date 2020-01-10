import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/categories', { params }));

export const create = formData => unify(api.post('/categories', formData));

export const update = (id, formData) => unify(api.put(`/categories/${id}`, formData));

export const getOne = id => unify(api.get(`/categories/${id}`));

export const del = id => unify(api.delete(`/categories/${id}`));
