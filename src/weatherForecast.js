import React,{useState} from "react";

import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForecast(props){
    let [loaded,setLoaded] = useState(false);
    let [forecast,setForecast] = useState(null);
    function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
    }
    if(loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                    <WeatherForecastDay data={forecast}/>
                </div>
                </div>
            </div>
        );
   
}else {
    let apikey="3d249bt9daobf40e979808326e2bf43a";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl =`https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apikey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}