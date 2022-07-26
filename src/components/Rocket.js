import React from 'react';
import PropTypes from 'prop-types';

import styles from './Rocket.module.css';

function Rocket(props) {
  const {
    id, name, description, image, reserved,
  } = props;

  const reservation = () => {
    reserved = true;
  }

  return (
    <div className={styles.rocket}>
      <img src={image} alt={name} height="250" width="300"></img>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type='button' className='reserve' onClick={reservation}>Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Rocket;
