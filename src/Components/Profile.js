import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Profile.module.css';

const Profile = () => {
  const rocketReserved = useSelector(state => state.rockets)
    .filter(rocket => rocket.reserved === true);
  const missionReserved = useSelector(state => state.missions)
    .filter(mission => mission.reserved === true);
  
  return (
    <div className={styles.profile}>
      <div className={styles.missions}>
        <h2>My Missions</h2>
        <ul className={styles.list}>
          {missionReserved.map((elem) => {
            const { mission_name, mission_id } = elem;
            return (
              <div key={mission_id} className={styles.element}>
                <li>{mission_name}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={styles.rockets}>
        <h2>My Rockets</h2>
        <ul className={styles.list}>
          {rocketReserved.map((elem) => {
            const { name, id } = elem;
            return (
              <div key={id} className={styles.element}>
                <li>{name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Profile;
