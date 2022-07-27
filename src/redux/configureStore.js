import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions';

const reducer = combineReducers(
    {
    missions: missionsSlice,
    },
);
  
const store = configureStore({ reducer });
  
export default store;