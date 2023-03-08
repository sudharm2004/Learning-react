import { createSlice } from "@reduxjs/toolkit";

const geoLocation = createSlice({
  name: "geoLocation",
  initialState: { location: null },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = geoLocation.actions;

export default geoLocation.reducer;
