import React,{useState} from "react";
import axios from "axios";
import FormattedDate from "./formattedDate";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function Weather(props) {
  
  const[weatherData,setWeatherData]= useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      city:response.data.city,
      humidity:response.data.temperature.humidity,
      description:response.data.condition.description,
      temperature:response.data.temperature.current,
      date:new Date(response.data.dt * 1000),
    wind:response.data.wind.speed,
 
iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"});
  }
  if(weatherData.ready){
    return (
      <div className="weather">
        <form>
          <div className="row mt-3">
            <div className="col-6">
          <input type="search" placeholder="Enter a City..."  className="from-control" autoFocus="on" />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
            <div className="float-left">
            <span className="temperature"> {Math.round(weatherData.temperature)}</span>
            <span className="unit"> ºc </span>
            </div>
            </div>
          </div>
          <div className="col-6"> <ul>
          <li>Humidity:{weatherData.humidity}%</li>
          <li>Wind:{weatherData.wind}km/h</li>
        </ul></div>
        </div>
        
      </div>
    );
  } else{
  const apikey = "3d249bt9daobf40e979808326e2bf43a";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
}
}
