import React, { useEffect, useRef, useState } from "react";
import "./Weather.css"; // Importing CSS styles for Weather component
import search_icon from "../assets/search.png"; // Importing search icon image
import clear_icon from "../assets/clear.png"; // Importing clear weather icon image
import cloud_icon from "../assets/cloud.png"; // Importing cloud weather icon image
import wind_icon from "../assets/wind.png"; // Importing wind weather icon image
import drizzle_icon from "../assets/drizzle.png"; // Importing drizzle weather icon image
import rain_icon from "../assets/rain.png"; // Importing rain weather icon image
import snow_icon from "../assets/snow.png"; // Importing snow weather icon image
import humidity_icon from "../assets/humidity.png"; // Importing humidity icon image

const Weather = () => {
  const inputRef = useRef(); // Ref for the input field to access its current value
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

  // Object mapping OpenWeatherMap icon codes to corresponding icon images
  const allIcons = {
    "01d": clear_icon, // clear sky day
    "01n": clear_icon, // clear sky night
    "02d": cloud_icon, // few clouds day
    "02n": cloud_icon, // few clouds night
    "03d": cloud_icon, // scattered clouds day
    "03n": cloud_icon, // scattered clouds night
    "04d": cloud_icon, // broken clouds day
    "04n": cloud_icon, // broken clouds night
    "09d": rain_icon, // shower rain day
    "09n": rain_icon, // shower rain night
    "10d": rain_icon, // rain day
    "10n": rain_icon, // rain night
    "13d": snow_icon, // snow day
    "13n": snow_icon, // snow night
  };

  // Function to fetch weather data from OpenWeatherMap API based on city name
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name"); // Alert user if input field is empty
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID // Constructing API URL with city name and API key
      }`;

      const response = await fetch(url); // Fetching weather data
      const data = await response.json(); // Parsing JSON response

      if (!response.ok) {
        alert(data.message); // Alert user with error message if API request fails
        return;
      }

      // Determine weather icon based on OpenWeatherMap icon code, default to clear icon if not found
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      // Update weatherData state with fetched weather information
      setWeatherData({
        humidity: data.main.humidity, // Humidity percentage
        windSpeed: data.wind.speed, // Wind speed in meters per second
        temperature: Math.floor(data.main.temp), // Temperature in Celsius rounded down
        location: data.name, // City name
        icon: icon, // Weather icon corresponding to current weather conditions
      });
    } catch (error) {
      setWeatherData(null); // Reset weatherData state if an error occurs
      console.error("Error in fetching weather data", error); // Log error to console
    }
  };

  useEffect(() => {
    search("Seattle"); // Initial weather data fetch for Seattle on component mount
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" /> {/* Input field for city name search */}
        <img
          src={search_icon}
          alt="Search"
          onClick={() => search(inputRef.current.value)} // Search button triggering search function
        />
      </div>
      {weatherData ? ( // Conditional rendering based on weatherData state
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" /> {/* Weather icon display */}
          <p className="temperature">{weatherData.temperature}°C</p> {/* Temperature display */}
          <p className="location">{weatherData.location}</p> {/* Location display */}
          <div className="weather-data">
            {/* Weather data details */}
            <div className="col">
              <img src={humidity_icon} alt="Humidity" /> {/* Humidity icon */}
              <div>
                <p>{weatherData.humidity}%</p> {/* Humidity percentage */}
                <span>Humidity</span> {/* Humidity label */}
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind Speed" /> {/* Wind speed icon */}
              <div>
                <p>{weatherData.windSpeed} km/h</p> {/* Wind speed in meters per second */}
                <span>Wind Speed</span> {/* Wind speed label */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <> </> // Placeholder for when weatherData is null (initial state)
      )}
    </div>
  );
};

export default Weather;
