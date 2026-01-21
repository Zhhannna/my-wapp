import { createSlice } from "@reduxjs/toolkit";

const temperatureSlice = createSlice({
  name: "temperature",
  initialState: {
    unit: "C" // "C" | "F" | "K"
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    toggleUnit: (state) => {
      state.unit = state.unit === "C" ? "F" : "C";
    }
  }
});

export const { setUnit, toggleUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;
