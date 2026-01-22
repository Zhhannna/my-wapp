// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer, { setStateFromStorage } from "./temperatureSlice";

const store = configureStore({
  reducer: {
    temperature: temperatureReducer
  }
});

// Load from localStorage on startup
const savedState = localStorage.getItem("appState");
if (savedState) {
  try {
    const parsed = JSON.parse(savedState);
    store.dispatch(setStateFromStorage(parsed));
  } catch (e) {
    console.error("Failed to parse saved state", e);
  }
}

// Save to localStorage on every change
store.subscribe(() => {
  const state = store.getState().temperature;
  localStorage.setItem("appState", JSON.stringify(state));
});

export default store;
