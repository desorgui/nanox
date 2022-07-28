import React from 'react';
import { useSelector } from 'react-redux';

import Rocket from './Rocket';

const Rockets = () => {
  const rocketlist = useSelector((state) => state.rockets);

  return (
    <div>
      <div>
        {rocketlist.map((elem) => {
          const {
            id, name, description, image, reserved,
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
};
export default Rockets;
