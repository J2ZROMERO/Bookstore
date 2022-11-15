import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AddRemoBook from './books/books';
import setConfig from './categories/categories';

const rootReducer = combineReducers({
  books: AddRemoBook,
  setcnf: setConfig,
});

const store = configureStore(rootReducer);
export default store;