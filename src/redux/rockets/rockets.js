import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETROCKETS = 'space-travelers-hub/rockets/GET_ROCKET';
const RESERVEROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';
const CANCELROCKET = 'space-travelers-hub/rockets/CANCEL_ROCKET';

const BASEURL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  GETROCKETS,
  async () => {
    const rocketList = [];
    const response = await fetch(BASEURL);
    const initValues = await response.json();
    initValues.forEach((elem) => {
      rocketList.push({
        id: elem.id,
        name: elem.rocket_name,
        description: elem.description,
        image: elem.flickr_images[0],
        reserved: false,
      });
    });
    return (rocketList);
  },
);

export const reserveRocket = createAsyncThunk(
  RESERVEROCKET,
  async (id) => id,
);

export const cancelRocket = createAsyncThunk(
  CANCELROCKET,
  async (id) => id,
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => action.payload,
    [reserveRocket.fulfilled]: (state, action) => state.map((rocket) => {
      if (rocket.id !== Number(action.payload)) { return rocket; }
      return { ...rocket, reserved: true };
    }),
    [cancelRocket.fulfilled]: (state, action) => state.map((rocket) => {
      if (rocket.id !== Number(action.payload)) { return rocket; }
      return { ...rocket, reserved: false };
    }),
  },
});
export default rocketSlice.reducer;
