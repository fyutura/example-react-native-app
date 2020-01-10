import api from './api';
import unify from './api/unify';

// eslint-disable-next-line import/prefer-default-export
export const getOne = id => unify(api.get(`/checkouts/${id}`));
