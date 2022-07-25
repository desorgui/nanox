import React from 'react';
import { NavLink } from 'react-router-dom';

import planet from '../images/planet.png';
import styles from './Navbar.module.css';


const Navbar = () => {
  const navItem = [
    {
      id: "1",
      title: "Rockets",
      link: "/",
    },
    {
      id: "2",
      title: "Missions",
      link: "/missions",
    },
    {
      id: "3",
      title: "My Profile",
      link: "/profile"
    }
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.logotitle}>
        <NavLink to={navItem[0].link}>
          <img src={planet} className="App-logo" alt="logo" />
        </NavLink>
        <h2>Space Travelers' Hub</h2>
      </div>
      <ul className={styles.menu}>
        {navItem.map((item) => (
          <li key={item.id}>
            <NavLink className={styles.navitem}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
