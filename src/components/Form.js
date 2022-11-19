import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from 'react';
import './Form.css';
// import store from '../redux/configureStore';
import { addBK, getBooks } from '../redux/books/books';

const Form = () => {
  const dataBook = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const titleInput = (e) => { setTitle(e.target.value); };
  const authorInput = (e) => { setAuthor(e.target.value); };
  const categoryInput = (e) => { setCategory(e.target.value); };
  const dispatch = useDispatch();
  const addBookButton = (e) => {
    e.preventDefault();

    if (title !== '' && author !== '') {
      // store.dispatch(addBK({ id: dataBook.length + 1, title, author }));
      dispatch(addBK({
        id: dataBook.length + 1, title, author, category,
      }));
      setAuthor('');
      setTitle('');
      setTimeout(() => dispatch(getBooks()), 1000);
    }
  };
  return (
      <>
      <form className="form">

    <input type='text' onInput={ titleInput } className="inputBook" placeholder="Title" value={title}></input>
    <input type='text' onInput={ authorInput } className="inputAuthor" placeholder="Author" value={author}></input>
    <input type='text' onInput={ categoryInput } className="inputAuthor" placeholder="category" value={category}></input>

  <button className="addBook" onClick={addBookButton}>ADD BOOK</button>
        </form>
        </>);
};

export default Form;