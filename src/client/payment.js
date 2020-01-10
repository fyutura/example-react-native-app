import api from './api';
import unify from './api/unify';

// eslint-disable-next-line import/prefer-default-export
export const getToken = () => unify(api.get('/payment/token'));
