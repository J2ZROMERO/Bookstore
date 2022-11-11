import React from 'react';
import Book from '../components/Book';
import Headerelem from '../components/Header';
import Form from '../components/Form';
import './Books.css';

const Books = () => {
  const data = {
    title: 'More than this',
    author: 'Dann',
  };
  return (
    <>
    <Headerelem />
    <Book book={data}/>
    <Book book={data}/>
    <Book book={data}/>
    <Form />
    </>
  );
};

export default Books;