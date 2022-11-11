import React from 'react';
import './Book.css';
import progress from '../media/progress.png';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, author } = this.props.book;

    return (

   <>
<section className="contentBook">
        <div className="general">
            <div className="generalData">
            <h1 className="styleBookData_1">Action</h1>
            <h1 className="styleBookData_2">{title}</h1>
            <h1 className="styleBookData_3">{author}</h1>
            </div>
            <div className="buttons">
            <button className="buttonsHeader">comments</button>
            <button className="buttonsHeader">Remove</button>
            <button className="buttonsHeader">Edit</button>
            </div>
        </div>

        <div className="percentage">
            <img src={progress} width='50px' height='50px'/>
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

        </>
    );
  }
}