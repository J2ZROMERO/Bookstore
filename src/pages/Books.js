import './Books.css';
import { useSelector } from 'react-redux';
import React from 'react';
import Book from '../components/Book';
import Headerelem from '../components/Header';
import Form from '../components/Form';

const Books = () => {
  const dataBook = useSelector((state) => state.books);
  return (
    <>
    <Headerelem />
    {dataBook.map((state) => <Book book={state} key={state.id} />)}
    <Form />
    </>
  );
};

export default Books;