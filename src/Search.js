import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [Description, setDescription] = useState("");

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function Finaldescription(response) {
    let temp = Math.round(response.data.main.temp);
    let descri = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setDescription(
      <ul>
        <li>Temperature: {temp}°C</li>
        <li>Description: {descri}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={icon} alt={descri} />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fdc8cfbf2d6fa0116c9ae92d3df4f79&units=metric`;
      axios.get(url).then(Finaldescription);
      <Finaldescription />;
    } else {
      setDescription("enter a city...");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={handleInputChange}
        />
        <input type="submit" value="Search" />
      </form>
      <h4>{Description}</h4>
      <div>
        coded by <a href="https://github.com/FTTM-M">Fatemeh</a>, is
        open-sourced on{" "}
        <a href="https://github.com/FTTM-M/weather-react">GitHub</a> and hosted
        on <a href="https://www.netlify.com/">Netlify</a>
      </div>{" "}
    </div>
  );
}
