import React,{useState, useEffect} from "react";

import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForecast(props){
    let [loaded,setLoaded] = useState(false);
    let [forecast,setForecast] = useState(null);
    useEffect(() => {
        setLoaded(false);
    },[props.coordinates]);

    function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
    }
    function load(){
    let apikey="3d249bt9daobf40e979808326e2bf43a";
    let longitude= props.coordinates.longitude;
    let latitude= props.coordinates.latitude;
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apikey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
    }
    if(loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                   if(index < 5){
                  return(
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                </div>
                  );
                   
                } else{
                    return null;
                }
                 })}
                </div>
            </div>
        );
   
}else {
    load();
}
}