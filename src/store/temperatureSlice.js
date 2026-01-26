// src/store/temperatureSlice.js
import { createSlice } from "@reduxjs/toolkit";

// --- Load saved state from localStorage ---
const savedState = JSON.parse(localStorage.getItem("weatherState")) || {
  unit: "C",
  favorites: []
};

// --- Helper to save state to localStorage ---
function saveState(state) {
  localStorage.setItem("weatherState", JSON.stringify(state));
}

// --- Initial Redux state ---
const initialState = {
  unit: savedState.unit,
  favorites: savedState.favorites
};

// --- Slice ---
const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
      saveState(state); // persist to localStorage
    },

    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fav) => fav !== id);
      } else {
        state.favorites.push(id);
      }

      saveState(state); // persist to localStorage
    }
  }
});

export const { setUnit, toggleFavorite } = temperatureSlice.actions;
export default temperatureSlice.reducer;
