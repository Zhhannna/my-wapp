import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "./temperatureSlice";

const store = configureStore({
  reducer: {
    temperature: temperatureReducer
  }
});

export default store;
