import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUrl = 'https://api.spacexdata.com/v3/missions';

const FETCHED_MISSION = 'FETCHED_MISSION';
const JOIN_OR_LEAVE_MISSION = 'JOIN_OR_LEAVE_MISSION';

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
  export const joinMission = (id) => ({ type: JOIN_OR_LEAVE_MISSION, payload: id });

  const missionSlice = createSlice({
    name: 'missions',
    initialState: [],
    extraReducers: {
      [getMissions.fulfilled]: (state, action) => action.payload,
      [JOIN_OR_LEAVE_MISSION]: (state, action) => (
        state.map((mission) => (
          mission.mission_id === action.payload ? { ...mission, reserved: !mission.reserved } : mission
        ))),
    },
  });

export default missionSlice.reducer;
