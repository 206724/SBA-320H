import React, { useEffect, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const [weatherData,setweatherData] = useState(false);

  

  const search =async(city)=>{
    try {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response =await fetch(url);
      const data =await response.json();
      console.log(data)
      setweatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon
      })
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    search("London")
  })
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">16c</p>
      <p className="location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={wind_icon} alt=" " />
          <div>
            <p>3.6 km/hr </p>
            <span>wind speed</span>
          </div>
        </div>

        <div className="col">
          <img src={cloud_icon} alt=" " />
          <div>
            <p>91 % </p>
            <span>Humidity </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
