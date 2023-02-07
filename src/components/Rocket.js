import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

import styles from './Rocket.module.css';

function Rocket(props) {
  const dispatch = useDispatch();
  const {
    id, name, description, image, reserved,
  } = props;

  const reservation = (elem) => {
    dispatch(reserveRocket(elem.target.id));
  };

  const cancel = (elem) => {
    dispatch(cancelRocket(elem.target.id));
  };

  return (
    <div className={styles.rocket}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {image.map((elem) => (
          <SwiperSlide key={elem}><img src={elem} alt={name} height="250" width="300" /></SwiperSlide>
        ))}
      </Swiper>
      <div>
        <h2 className={styles.rocketname}>{name}</h2>
        <p>
          {reserved && <mark>Reserved</mark>}
          {' '}
          {description}
        </p>
        {reserved
          ? <button id={id} type="button" className={styles.cancel} onClick={cancel}>Cancel Reservation</button>
          : <button id={id} type="button" className={styles.reserve} onClick={reservation}>Reserve Rocket</button>}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;
