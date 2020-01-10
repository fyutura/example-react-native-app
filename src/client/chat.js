import api from './api';
import unify from './api/unify';

export const createIfNotExist = data => unify(api.patch('/chats/sender', data));

export const getAll = params => unify(api.get('/chats', { params }));

export const getOne = id => unify(api.get(`/chats/${id}`));

export const getMessages = (id, params) => unify(api.get(`/chats/${id}/messages`, { params }));

export const getUnreadMessagesCount = () => unify(api.get('/chats/count/unread'));

export const deleteChat = id => unify(api.delete(`/chats/${id}`));
