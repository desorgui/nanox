import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rockets';

import styles from './Rockets.module.css';

const Rockets = () => {
  const rocketlist = useSelector(state => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className={styles.books}>
      <div className={styles.booklist}>
        {rocketlist.map((elem) => {
          const {
            id, name, description, image, reserved
          } = elem;
          return (
            <Rocket
              key={id}
              id={id}
              name={name}
              description={description}
              image={image}
              reserved={reserved}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Rockets;
