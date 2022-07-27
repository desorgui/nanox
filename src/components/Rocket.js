import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

import styles from './Rocket.module.css';

function Rocket(props) {
  const dispatch = useDispatch();
  const {
    id, name, description, image, reserved,
  } = props;
  console.log(reserved);

  const reservation = (elem) => {
    dispatch(reserveRocket(elem.target.id));
  }

  const cancel = (elem) => {
    dispatch(cancelRocket(elem.target.id));
    // console.log(elem.target.id);
  }

  return (
    <div className={styles.rocket}>
      <img src={image} alt={name} height="250" width="300"></img>
      <div>
        <h2>{name}</h2>
        <p>{reserved && <mark>Reserved</mark>}        {description}</p>
        {reserved
          ? <button id={id} type='button' className={styles.cancel} onClick={cancel}>Cancel Reservation</button>
          : <button id={id} type='button' className={styles.reserve} onClick={reservation}>Reserve Rocket</button>
        }
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
