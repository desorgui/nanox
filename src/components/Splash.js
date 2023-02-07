import React from 'react';
import { Link } from 'react-router-dom';
import astronaut from '../images/astronaut.png';
import '../button.css';
import Rockets from './Rockets';

const Splash = () => (
  <>
    <div className="splash-container">
      <div className="content">
        <h1>
          The future
          <br />
          <span>
            of space
            <br />
          </span>
          exploration
        </h1>
        <Link to="/rockets" className="btn">Explore Rockets</Link>
      </div>
      <img src={astronaut} alt="astronaut" />
      <div className="progress-bar" />
    </div>
    <Rockets />
  </>
);

export default Splash;