import React from 'react';
import { useSelector } from 'react-redux';

import Rocket from './Rocket';

const Rockets = () => {
  const rocketlist = useSelector((state) => state.rockets);

  return (
    <div className="rockets-container">
      <h1>Rockets list</h1>
      <div>
        {rocketlist.map((elem) => <Rocket key={elem.id} {...elem} />)} {/* eslint-disable-line */}
      </div>
    </div>
  );
};
export default Rockets;
