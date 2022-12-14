import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'book-keeper/src/redux/books/addBook';
const REMOVE_BOOK = 'book-keeper/src/redux/books/removeBook';
const GET_BOOKS = 'book-keeper/src/redux/books/getBooks';

const initialState = [];

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aU0LTslNaYlS1BCACa68/books/';

export const addBK = createAsyncThunk(ADD_BOOK, (payload) => {
  axios.post(`${apiUrl}`, {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
  })
    .then((response) => (response.data));
});

export const removeBK = createAsyncThunk(REMOVE_BOOK, (id) => {
  axios.delete(`${apiUrl}${id}`)
    .then((response) => (response.data));
});

export const getBooks = createAsyncThunk(
  GET_BOOKS, () => axios.get(apiUrl).then((res) => {
    const books = res.data;
    const data = Object.keys(books).map((id) => ({
      id,
      title: books[id][0].title,
      author: books[id][0].author,
      category: books[id][0].category,
    }));
    return data;
  }),
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (_, action) => action.payload);
    builder.addCase(getBooks.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getBooks.pending, (_, action) => action.payload);
  },
});

export default booksSlice.reducer;