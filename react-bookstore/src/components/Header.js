import React from 'react';
import Nav from './Nav';
import './Header.css'
import user from '../media/user.png'

const Headerelem = () => {
return (
    <>
    <header className='head'>
        <h1 className="title">Bookstore CMS</h1>
        <Nav />
      <img src={user} width='30px' height='30px'/>
    </header>
 </>   
  
    
)
}

export default Headerelem