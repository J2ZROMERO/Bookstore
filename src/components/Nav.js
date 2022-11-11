import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Bookstore CMS',
    },
    {
      id: 2,
      path: '/books',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (

            <nav className='bookCategories'>
            <ul className='listHeader'>
              {links.map((link) => (

                <li id={link.id} key={link.id} className={`child${link.id}`}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
  );
};

export default Nav;