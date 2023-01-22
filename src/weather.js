import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function Weather(props) {
  const[city,setCity]= useState(props.defaultCity);
  const[weatherData,setWeatherData]= useState({ready:false});

  function handleResponse(response){
    
    setWeatherData({
      ready:true,
      city:response.data.city,
      humidity:response.data.temperature.humidity,
      description:response.data.condition.description,
      temperature:response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind:response.data.wind.speed,
      icon: response.data.condition.icon});
  }
  function search(){
    const apikey = "3d249bt9daobf40e979808326e2bf43a";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
 event.preventDefault();
 search();
  }
  function handleCityChange(event){
setCity(event.target.value);
  }
  if(weatherData.ready){
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-6">
          <input type="search" placeholder="Enter a City..."  className="from-control" autoFocus="on" onChange={handleCityChange} />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary btn-sm w-100" />
          </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
       </div>
    );
  } else{
  search();
  return "Loading..."
}
}
