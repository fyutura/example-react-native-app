import { createSelector } from 'reselect';

export const getAuth = state => state.auth;

export const userSelector = createSelector(
  getAuth,
  auth => auth.currentUser
);

export const isAuthenticatedSelector = createSelector(
  getAuth,
  state => state.isAuthenticated
);

export const currentUserSelector = createSelector(
  userSelector,
  user => user
);

export const currentUserIdSelector = createSelector(
  userSelector,
  user => user && user._id
);

const selectMain = state => state.main;

export const isMobileSelector = createSelector(
  selectMain,
  state => state.isMobile
);

export const chatsStateSelector = state => state.chats;

export const unreadChatsCountSelector = createSelector(
  chatsStateSelector,
  chats => chats.unreadCount
);

const getproducts = state => state.products;

export const productsDataSelector = createSelector(
  getproducts,
  products => products.productsData
);

export const productsLoadingSelector = createSelector(
  getproducts,
  products => products.isLoading
);

export const productsHasMoreSelector = createSelector(
  getproducts,
  products => products.hasMore
);

export const productsCountSelector = createSelector(
  getproducts,
  products => products.count
);

export const productsScrollPositionSelector = createSelector(
  getproducts,
  products => products.scrollPosition
);
