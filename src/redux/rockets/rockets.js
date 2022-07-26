import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETROCKETS = 'space-travelers-hub/rockets/GET_ROCKET';

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
        reserved: false 
      });
    })
    return (rocketList);
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => action.payload,
  },
});
export default rocketSlice.reducer;
