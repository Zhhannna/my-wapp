// src/store/temperatureSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "C",        // "C" | "F" | "K"
  favorites: []     // array of city IDs
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    toggleUnit: (state) => {
      state.unit = state.unit === "C" ? "F" : "C";
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((favId) => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
    setStateFromStorage: (state, action) => {
      // replace state with loaded one
      return { ...state, ...action.payload };
    }
  }
});

export const { setUnit, toggleUnit, toggleFavorite, setStateFromStorage } =
  temperatureSlice.actions;
export default temperatureSlice.reducer;
