import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png'

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
<div className="">
<NavLink to={navItem[0].link}>
  <img src={planet} className="App-logo" alt="logo" />
</NavLink>
  <ul className="showMenu">
    {navItem.map((item) => (
      <li key={item.id}>
        <NavLink
          to={item.link}
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
</div>
}

export default Navbar;
