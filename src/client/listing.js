import api from './api';
import unify from './api/unify';

export const getAll = params => unify(api.get('/products', { params }));

export const create = data => unify(api.post('/products', data));

export const uploadPhotos = (id, photos) =>
  unify(
    api.put(`/products/${id}/upload`, photos, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  );

export const update = (id, data) => unify(api.put(`/products/${id}`, data));

export const getOne = id => unify(api.get(`/products/${id}`));

export const del = id => unify(api.delete(`/products/${id}`));

export const makeFavorite = id => unify(api.post(`/products/favorites/${id}`));

export const unfavorite = id => unify(api.delete(`/products/favorites/${id}`));

export const report = id => unify(api.post(`/products/${id}/report`));
