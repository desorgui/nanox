import { combineReducers, configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rockets';
import missionSlice from './missions/missions';

const reducer = combineReducers(
  {
    rockets: rocketSlice,
    missions: missionSlice,
  },
);
const store = configureStore({ reducer });
export default store;
