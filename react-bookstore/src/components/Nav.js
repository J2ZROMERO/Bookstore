import React from 'react';
import { Link } from 'react-router-dom';
const  Nav = () =>{
        const links = [
          {
            id: 1,
            path: '/books',
            text: 'Books',
          },
          {
            id: 2,
            path: '/categories',
            text: 'Categories',
          },
        ];
        return (
            <nav className='bookCategories'>
            <ul className='listHeader'>
              {links.map((link) => (
                <li key={link.id} className='childUl'>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )
    }

export default Nav