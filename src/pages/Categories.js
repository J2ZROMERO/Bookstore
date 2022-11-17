import React from 'react';
import Headerelem from '../components/Header';
import store from '../redux/configureStore';
import checkedStatus from '../redux/categories/categories';

const Categories = () => {
  const ckstatus = () => {
    store.dispatch(checkedStatus.checkedStatus());
  };
  return (
        <>
     <Headerelem />
        <h1>this is categories section</h1>
        <button onClick={ckstatus}> Check Status </button>
        </>
  );
};

export default Categories;