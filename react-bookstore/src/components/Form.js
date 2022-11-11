import React from 'react';
import './Form.css';

const Form = () => (

        <form className="form">
         <h1 className="addNbook">ADD NEW BOOK</h1>
    <input type='text' className="inputBook" placeholder="Title"></input>
    <input type='text' className="inputAuthor" placeholder="Author"></input>

  <button className="addBook">ADD BOOK</button>
        </form>
);

export default Form;