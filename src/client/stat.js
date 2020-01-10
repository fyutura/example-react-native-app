import api from './api';
import unify from './api/unify';

export const getRevenue = params => unify(api.get('/stat/revenue', { params }));

export const getProducts = params => unify(api.get('/stat/products', { params }));

export const getMessages = params => unify(api.get('/stat/messages', { params }));

export const getUsers = params => unify(api.get('/stat/users', { params }));
