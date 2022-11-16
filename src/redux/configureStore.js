import { configureStore } from '@reduxjs/toolkit';
import { AddRemoBook } from './books/books';
import setConfig from './categories/categories';

// const rootReducer = ;

const store = configureStore({
  reducer: {
    books: AddRemoBook,
    setcnf: setConfig,
  },
});
export default store;