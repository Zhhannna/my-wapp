import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CityList from "./components/CityList";
import CityDetails from "./components/CityDetails";
import weatherData from "./data/weatherData";
import { toggleUnit } from "./store/temperatureSlice";

function TemperatureToggle() {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperature.unit);

  return (
    <button className="back-btn" onClick={() => dispatch(toggleUnit())}>
      Switch to {unit === "C" ? "°F" : "°C"}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="app-title">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Clime
        </Link>
      </h1>

      <TemperatureToggle />

      <Routes>
        <Route path="/" element={<CityList cities={weatherData} />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
