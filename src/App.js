import { useState } from "react";
import CityList from "./components/CityList";
import CityDetails from "./components/CityDetails";
import weatherData from "./data/weatherData";
import './App.css'; // keep your CSS

function App() {
  const [selectedCity, setSelectedCity] = useState(null); // Stores clicked city

  // Function when a city card is clicked
  const handleSelectCity = (city) => {
    setSelectedCity(city); // Set selected city
  };

  // Function to go back to city list
  const handleBack = () => {
    setSelectedCity(null); // Deselect city
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather App</h1>

      {selectedCity ? (
        <CityDetails city={selectedCity} onBack={handleBack} />
      ) : (
        <CityList cities={weatherData} onSelectCity={handleSelectCity} />
      )}
    </div>
  );
}

export default App;
