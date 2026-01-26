// src/components/CityDetails.js
import React, { useReducer, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import weatherData from "../data/weatherData";
import { fetchWeather, fetchForecast } from "../api/weatherApi";

const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FORECAST":
      return { ...state, isForecastVisible: !state.isForecastVisible };
    default:
      return state;
  }
};

function convertTemp(temp, unit) {
  if (unit === "C") return Math.round(temp);
  if (unit === "F") return Math.round((temp * 9) / 5 + 32);
  if (unit === "K") return Math.round(temp + 273.15);
  return temp;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function extractDailyForecast(list) {
  const dailyMap = {};

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyMap[date]) {
      dailyMap[date] = item;
    }
  });

  return Object.values(dailyMap).slice(0, 5);
}

function CityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = useSelector((state) => state.temperature.unit);

  const cityMeta = weatherData.find((c) => c.id === Number(id));

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(visibilityReducer, {
    isForecastVisible: true
  });

  useEffect(() => {
    async function load() {
      try {
        const weatherData = await fetchWeather(cityMeta.city);
        setWeather(weatherData);

        const forecastData = await fetchForecast(cityMeta.city);
        const daily = extractDailyForecast(forecastData.list).map((day) => {
  const precipitation = {
    probability: day.pop ? Math.round(day.pop * 100) : 0,
    rain: day.rain ? day.rain["3h"] || day.rain : 0,
    snow: day.snow ? day.snow["3h"] || day.snow : 0,
    clouds: day.clouds?.all ?? 0
  };

  return { ...day, precipitation };
});


        setForecast(daily);
      } catch (err) {
        console.error("Error loading weather:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [cityMeta.city]);

  if (!cityMeta) return <h2>City not found</h2>;
  if (loading) return <h2>Loading weather...</h2>;
  if (!weather) return <h2>Could not load weather data</h2>;

  const icon = weather.weather[0].icon;
  const condition = weather.weather[0].main;

  return (
    <div className="city-details">
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to List
      </button>

      <div className="main-weather">
        <h2 className="city-name">{cityMeta.city}</h2>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={condition}
          className="condition-icon-large"
        />

        <div className="temperature-large">
          {convertTemp(weather.main.temp, unit)}°{unit}
        </div>

        <div className="condition-text">{condition}</div>
      </div>

      <div className="weather-info-card">
        <div className="weather-info-title">Weather Details</div>

        <div className="weather-info-row">
          <span>Wind:</span>
          <span>{weather.wind.speed} m/s</span>
        </div>

        <div className="weather-info-row">
          <span>Humidity:</span>
          <span>{weather.main.humidity}%</span>
        </div>

        <div className="weather-info-row">
          <span>Pressure:</span>
          <span>{weather.main.pressure} hPa</span>
        </div>

        <div className="weather-info-row">
          <span>Cloudiness:</span>
          <span>{weather.clouds.all}%</span>
        </div>

        <div className="weather-info-row">
          <span>Rain (1h):</span>
          <span>{weather.rain?.["1h"] || 0} mm</span>
        </div>

        <div className="weather-info-row">
          <span>Snow (1h):</span>
          <span>{weather.snow?.["1h"] || 0} mm</span>
        </div>
      </div>

      <button
        className="back-btn"
        style={{ marginTop: "20px", fontSize: "0.9rem" }}
        onClick={() => dispatch({ type: "TOGGLE_FORECAST" })}
      >
        {state.isForecastVisible ? "Hide 5‑Day Forecast" : "Show 5‑Day Forecast"}
      </button>

      {state.isForecastVisible && (
        <>
          <h3 style={{ marginTop: "30px" }}>5‑Day Forecast</h3>

          <div className="forecast-grid">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-date">{formatDate(day.dt_txt)}</div>

                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].main}
                />

                <div className="forecast-temp">
                  {convertTemp(day.main.temp, unit)}°{unit}
                </div>

                <div className="forecast-condition">
                  {day.weather[0].main}
                </div>

                <div className="forecast-precip">
                  <div>💧 {day.precipitation.probability}%</div>
                  <div>🌧️ {day.precipitation.rain} mm</div>
                  <div>❄️ {day.precipitation.snow} mm</div>
                  <div>☁️ {day.precipitation.clouds}%</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CityDetails;
