import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUrl = 'https://api.spacexdata.com/v3/missions';

const FETCHED_MISSION = 'FETCHED_MISSION';

export const getMissions = createAsyncThunk(
    FETCHED_MISSION,
    async () => {
      const missionArr = [];
     await fetch(getUrl).then((missions) => missions.json())
      .then(res => res.forEach((mission) => {
        missionArr.push({
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
            reserved: false
        });
      }));
      return (missionArr);
    },
  );

  const missionSlice = createSlice({
    name: 'missions',
    initialState: [],
    extraReducers: {
      [getMissions.fulfilled]: (state, action) => action.payload,
    },
  });

export default missionSlice.reducer;
