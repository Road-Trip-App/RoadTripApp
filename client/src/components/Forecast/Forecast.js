import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});

   const uriEncodedCity = encodeURIComponent(city);
    
    function getForecast(e) {
        e.preventDefault();
 
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "525b5d8eaemsh7f1a6e5c7d8055ap119557jsncf0e47594c67",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
 .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
    }
    return (
       <>
         
         <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio} >
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio} >
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
           
           <Conditions
               responseObj={responseObj}
               />
       </div>
       

    
     </>
    )
 }
 export default Forecast;
