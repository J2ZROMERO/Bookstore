import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from 'react';
import '../styles/Form.css';
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
      dispatch(addBK({
        id: dataBook.length + 1, title, author, category,
      }));
      setAuthor('');
      setTitle('');
      setCategory('');
      setTimeout(() => dispatch(getBooks()), 1000);
    }
  };
  return (
      <>
      <form className="form">
<h1 className='addNbook'>ADD NEW BOOK</h1>

    <input type='text' onInput={ titleInput } className="inputBook" placeholder="Title" value={title}></input>
    <input type='text' onInput={ authorInput } className="inputAuthor" placeholder="Author" value={author}></input>
    <select className="inputAuthor" onInput={ categoryInput } required>
            <option value="" hidden>Category</option>
            <option value="Action">Action</option>
            <option value="Suspense">Suspense</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Fiction">Fiction</option>
            <option value="Real Life">Real Life</option>
          </select>
  <button className="addBook" onClick={addBookButton}>ADD BOOK</button>
        </form>
        </>);
};

export default Form;