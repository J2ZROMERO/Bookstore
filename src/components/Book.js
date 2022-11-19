/* eslint-disable react/prop-types */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import '../styles/Book.css';
// import progress from '../media/progress.png';
// import { useDispatch } from 'react-redux';
import { removeBK, getBooks } from '../redux/books/books';
// import { removeBK } from '../redux/books/books';
import store from '../redux/configureStore';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.idR = { id: 0 };
  }

  setIDR(val) {
    this.idR.id = val;
  }

  render() {
    const removeElem = (e) => {
      const idVal = e.target.parentElement.parentElement.parentElement.id;
      store.dispatch(removeBK(idVal));
      setTimeout(() => store.dispatch(getBooks()), 1000);
    };
    const {
      category, id, title, author,
    } = this.props.book;
    const percentage = 64;
    return (

<section className="contentBook" id={id}>
        <div className="general">
            <div className="generalData">
            <h1 className="styleBookData_1">{category}</h1>
            <h1 className="styleBookData_2">{title}</h1>
            <h1 className="styleBookData_3">{author}</h1>
            </div>
            <div className="buttons">
            <button className="buttonsHeader">comments</button>
            <button className="buttonsHeader" onClick={removeElem}>Remove</button>
            <button className="buttonsHeader">Edit</button>
            </div>
        </div>

        <div className="percentage">
        <CircularProgressbar className='percentage' value={percentage} text={`${percentage}%`} />;
        <div className="percentageData">
        <h1 className="percentageVal">64%</h1>
        <h1 className="percentageText">completed</h1>
        </div>
        </div>
        <div className="chapter">
        <div className="chapterData">
        <h1 className="cChapter">CURRENT CHAPTER</h1>
        <h1 className="cap">Chapter 17</h1>
            </div>

            <button type="button" className="chapterButton">UPDATE PROGRESS</button>
          </div>

</section>

    );
  }
}