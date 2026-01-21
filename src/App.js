// src/App.js
import React, { useState } from "react";
import CityList from "./components/CityList";
import CityDetails from "./components/CityDetails";
import weatherData from "./data/weatherData";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  const handleBack = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App">
      <h1 className="app-title">Clime</h1>
      {selectedCity ? (
        <CityDetails city={selectedCity} onBack={handleBack} />
      ) : (
        <CityList cities={weatherData} onSelectCity={handleSelectCity} />
      )}
    </div>
  );
}

export default App;
