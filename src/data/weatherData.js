// src/data/weatherData.js

const weatherData = [
  {
    id: 1,
    city: "Warsaw",
    temperature: 10,
    condition: "Cloudy",
    icon: "/icons/cloudy.svg",
    windSpeed: "15 km/h",
    windDirection: "NW",
    clouds: "80%",
    precipitation: { chance: "20%", type: "Rain", amount: "2 mm" },
    forecast: [
      { day: "Mon", temp: 11, condition: "Rain" },
      { day: "Tue", temp: 9, condition: "Cloudy" },
      { day: "Wed", temp: 12, condition: "Sunny" },
      { day: "Thu", temp: 10, condition: "Rain" },
      { day: "Fri", temp: 13, condition: "Sunny" }
    ]
  },

  {
    id: 2,
    city: "London",
    temperature: -2,
    condition: "Snowy",
    icon: "/icons/snow.svg",
    windSpeed: "12 km/h",
    windDirection: "N",
    clouds: "70%",
    precipitation: { chance: "50%", type: "Snow", amount: "5 mm" },
    forecast: [
      { day: "Mon", temp: -1, condition: "Snowy" },
      { day: "Tue", temp: -3, condition: "Cloudy" },
      { day: "Wed", temp: 0, condition: "Sunny" },
      { day: "Thu", temp: -2, condition: "Snowy" },
      { day: "Fri", temp: 1, condition: "Cloudy" }
    ]
  },

  {
    id: 3,
    city: "Paris",
    temperature: 18,
    condition: "Sunny",
    icon: "/icons/sunny.svg",
    windSpeed: "10 km/h",
    windDirection: "E",
    clouds: "10%",
    precipitation: { chance: "0%", type: "None", amount: "0 mm" },
    forecast: [
      { day: "Mon", temp: 19, condition: "Sunny" },
      { day: "Tue", temp: 17, condition: "Cloudy" },
      { day: "Wed", temp: 20, condition: "Sunny" },
      { day: "Thu", temp: 18, condition: "Partly Cloudy" },
      { day: "Fri", temp: 21, condition: "Sunny" }
    ]
  },

  {
    id: 4,
    city: "Sydney",
    temperature: 25,
    condition: "Partly Cloudy",
    icon: "/icons/partly-cloudy.svg",
    windSpeed: "8 km/h",
    windDirection: "SE",
    clouds: "30%",
    precipitation: { chance: "10%", type: "Drizzle", amount: "1 mm" },
    forecast: [
      { day: "Mon", temp: 26, condition: "Sunny" },
      { day: "Tue", temp: 24, condition: "Partly Cloudy" },
      { day: "Wed", temp: 25, condition: "Sunny" },
      { day: "Thu", temp: 23, condition: "Rain" },
      { day: "Fri", temp: 27, condition: "Sunny" }
    ]
  },

  {
    id: 5,
    city: "New York",
    temperature: 8,
    condition: "Fog",
    icon: "/icons/fog.svg",
    windSpeed: "5 km/h",
    windDirection: "N",
    clouds: "100%",
    precipitation: { chance: "30%", type: "Mist", amount: "0.5 mm" },
    forecast: [
      { day: "Mon", temp: 9, condition: "Fog" },
      { day: "Tue", temp: 7, condition: "Cloudy" },
      { day: "Wed", temp: 10, condition: "Sunny" },
      { day: "Thu", temp: 8, condition: "Rain" },
      { day: "Fri", temp: 11, condition: "Cloudy" }
    ]
  },

  {
    id: 6,
    city: "Toronto",
    temperature: 14,
    condition: "Sunny",
    icon: "/icons/sunny.svg",
    windSpeed: "9 km/h",
    windDirection: "NE",
    clouds: "5%",
    precipitation: { chance: "0%", type: "None", amount: "0 mm" },
    forecast: [
      { day: "Mon", temp: 15, condition: "Sunny" },
      { day: "Tue", temp: 13, condition: "Cloudy" },
      { day: "Wed", temp: 16, condition: "Sunny" },
      { day: "Thu", temp: 14, condition: "Rain" },
      { day: "Fri", temp: 17, condition: "Sunny" }
    ]
  }
];

export default weatherData;
