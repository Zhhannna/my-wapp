// src/App.js
import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CityList from "./components/CityList";
import CityDetails from "./components/CityDetails";
import weatherData from "./data/weatherData";
import { setUnit } from "./store/temperatureSlice";

function TemperatureToggle() {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperature.unit);

  const handleChange = (e) => {
    dispatch(setUnit(e.target.value));
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <label style={{ fontSize: "1.1rem" }}>
        Temperature Unit:
        <select
          value={unit}
          onChange={handleChange}
          style={{
            marginLeft: "10px",
            padding: "5px",
            borderRadius: "5px"
          }}
        >
          <option value="C">°C</option>
          <option value="F">°F</option>
          <option value="K">K</option>
        </select>
      </label>
    </div>
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
