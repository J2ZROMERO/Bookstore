import '../styles/Books.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Book from '../components/Book';
import Headerelem from '../components/Header';
import Form from '../components/Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dataBook = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
    <Headerelem />
    {dataBook.map((state) => <Book book={state} key={state.id} />)}
    <Form />
    </>
  );
};

export default Books;