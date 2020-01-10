import {
  UPLOAD_PRODUCTS,
  FETCH_PRODUCTS,
  GOT_ALL_PRODUCTS_FROM_SERVER,
  SET_SCROLL_POSITION,
} from '../constants/products';

export const uploadProducts = (products, count) => ({
  type: UPLOAD_PRODUCTS,
  payload: {
    products,
    count,
  },
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setScrollPosition = scrollPosition => ({
  type: SET_SCROLL_POSITION,
  payload: scrollPosition,
});

export const gotAllProductsFromServer = () => ({
  type: GOT_ALL_PRODUCTS_FROM_SERVER,
});
