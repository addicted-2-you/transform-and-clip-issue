import { createSlice } from "@reduxjs/toolkit";

import { getShapeCssMask, HEXAGON_SHAPE } from "../shapes";

const initialState = {
  scale: 1.05,
  shape: HEXAGON_SHAPE,
  shapeCssMask: getShapeCssMask(HEXAGON_SHAPE),
};

export const appSlice = createSlice({
  name: "app",

  initialState,

  reducers: {
    incrementScale: (state) => {
      state.scale *= 1.05;
    },

    decrementScale: (state) => {
      state.scale /= 1.05;
    },
  },
});

export const { incrementScale, decrementScale } = appSlice.actions;

export default appSlice.reducer;
