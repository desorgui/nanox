import React from 'react';
import { NavLink } from 'react-router-dom';

import planet from '../images/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navItem = [
    {
      id: '1',
      title: 'Rockets',
      link: '/rockets',
    },
    {
      id: '2',
      title: 'Missions',
      link: '/missions',
    },
    {
      id: '3',
      title: 'My Profile',
      link: '/profile',
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logotitle}>
          <NavLink to="/" className={styles.logotitle}>
            <img src={planet} className="App-logo" alt="logo" />
            <span className={styles.span}>nanoX</span>
          </NavLink>
        </div>
        <ul className={styles.menu}>
          {navItem.map((item) => (
            <li key={item.id}>
              <NavLink
                className={`${styles.navitem}`}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
