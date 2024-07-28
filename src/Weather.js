import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState()

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
const fetchWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'47e3211e9306df53c90ffcf40673d0c0'}`);
        setWeather(response)
    } 
    catch(error){
console.log('error fetching weather data',error)
    }
}
  const handleClick = () => {
    fetchWeather()
  }
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCityChange}
      />
     
      <button onClick={handleClick}>Get Weather</button>
     {
        weather && <>
            <div className="weather-info">
<h3> City Name : {weather.data.name}</h3>
<p>Temprature : {weather.data.main.temp}</p>
<p>{weather.data.weather[0].description}</p>
            </div>
        </>
     }
    </div>
  );
}