import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];
console.log(axios, createAsyncThunk, createSlice, initialState);
const ADDED_BOOK = 'ADDED_BOOK';

const AddRemoBook = createAsyncThunk('books/fetchBooks', () => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books')
  .then((response) => {
    const books = response.data;
    const data = Object.keys(books).map((id) => ({
      id: Number(id),
      title: books[id][0].title,
      author: books[id][0].author,
      category: books[id][0].category,
    }));
    return data;
  }));

const addBK = createAsyncThunk('books/addBooks', (book) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books', book)
    .then((response) => response.status).then((data) => data);
});

const removeBK = createAsyncThunk(ADDED_BOOK, (id) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books/${id}`)
    .then((response) => response.data);
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(AddRemoBook.fulfilled, (state, action) => action.payload);
  },
});

export {
  AddRemoBook, addBK, removeBK, booksSlice,
};