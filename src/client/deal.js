import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/deals', { params }));

export const create = data => unify(api.post('/deals', data));

export const update = (id, data) => unify(api.put(`/deals/${id}`, data));

export const getOne = id => unify(api.get(`/deals/${id}`));

export const del = id => unify(api.delete(`/deals/${id}`));

export const getActive = () => unify(api.get('/deals/popup/get'));

export const getActiveUnlim = () => unify(api.get('/unlimdeals/popup/get'));

export const sendActive = () => unify(api.post('/deals/popup/send'));
