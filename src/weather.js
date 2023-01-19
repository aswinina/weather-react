import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function Weather() {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  let form = (
    <div>
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="offset-sm-1 col-sm-10">
              <form onSubmit={handleSubmit}>
                <div class="mb-3 location">
                  <label for="exampleInputEmail1" class="form-label"></label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    class="form-control"
                    autoComplete="off"
                    onChange={changeCity}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b74d10f3ef03caf1ac640b557c288c3&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <h1>Weather Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={icon} />
        </li>
      </ul>
    </div>
  );
}
