import {
  UPLOAD_PRODUCTS,
  FETCH_PRODUCTS,
  GOT_ALL_PRODUCTS_FROM_SERVER,
  SET_SCROLL_POSITION,
} from '../constants/products';

const initialState = {
  productsData: [],
  count: 0,
  scrollPosition: 0,
  hasMore: true,
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPLOAD_PRODUCTS:
      return { ...state, productsData: payload.products, count: payload.count, isLoading: false };
    case FETCH_PRODUCTS:
      return { ...state, productsData: [] };
    case GOT_ALL_PRODUCTS_FROM_SERVER:
      return { ...state, isLoading: false, hasMore: false };
    case SET_SCROLL_POSITION:
      return { ...state, scrollPosition: payload };
    default:
      return state;
  }
};
