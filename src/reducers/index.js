import { combineReducers } from 'redux';
import main from './main';
import auth from './auth';
import popup from './popup';
import chats from './chats';
import products from './products';

export default combineReducers({
  popup,
  auth,
  main,
  chats,
  products,
});
