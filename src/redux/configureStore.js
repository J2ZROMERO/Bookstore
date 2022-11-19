import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import setConfig from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    setcnf: setConfig,
  },
});
export default store;