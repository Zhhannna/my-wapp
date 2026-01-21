function CityDetails({ city, onBack }) {
  if (!city) return null; // If no city selected, show nothing

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "10px" }}>Back</button>

      <h2>{city.city}</h2>
      <p>Temperature: {city.temperature}°C</p>
      <p>Condition: {city.condition}</p>
      <p>Wind: {city.windSpeed} {city.windDirection}</p>
      <p>Clouds: {city.clouds}</p>
      <p>
        Precipitation: {city.precipitation.chance}, {city.precipitation.type}, {city.precipitation.amount}
      </p>

      <h3>5-day forecast:</h3>
      <ul>
        {city.forecast.map((day, index) => (
          <li key={index}>
            {day.day}: {day.temp}°C, {day.condition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityDetails;
