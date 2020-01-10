import axios from '../client/api';

export const getProduct = id => () => axios.get(`/products/${id}`);

export const getRelatedItems = (skip, title) => () =>
  axios.get(`/products?skip=${skip}&limit=10&title=${title}`);
