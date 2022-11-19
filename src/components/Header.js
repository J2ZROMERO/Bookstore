import React from 'react';
import Nav from './Nav';
import '../styles/Header.css';
import user from '../media/user.png';

const Headerelem = () => (
    <>
    <header className='head'>
        <Nav />
      <img src={user} width='30px' height='30px'/>
    </header>
 </>

);

export default Headerelem;