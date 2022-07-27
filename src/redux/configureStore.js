import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rockets';
import missionsSlice from './missions/missions';

const reducer = combineReducers(
  {
    rockets: rocketSlice,
    missions: missionsSlice,
  },
);
const store = configureStore({ reducer });
export default store;
