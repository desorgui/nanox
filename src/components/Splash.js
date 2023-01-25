import React from 'react';
import { Link } from 'react-router-dom';
import astronaut from '../images/astronaut.png';
import '../button.css';

const Splash = () => (
  <div className="splash-container">
    <div className="content">
      <h1>
        Welcome
        <br />
        <span>
          to the
          <br />
        </span>
        Space
      </h1>
      <Link to="/rockets" className="btn">Explore Rockets</Link>
    </div>
    <img src={astronaut} alt="astronaut" />
  </div>
);

export default Splash;