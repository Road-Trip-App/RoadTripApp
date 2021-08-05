import React from 'react';
import classes from './Conditions.module.css'
const Conditions = (props) => {
   return (
       
    <div className={classes.Wrapper}>
           {props.responseObj.cod === 200 ?
               <div className="d-flex justify-content-center flex-direction-column bg-info">
                   <p><strong>{props.responseObj.name} </strong></p>
                   <p> It is currently {Math.round(props.responseObj.main.temp)} °C out with {props.responseObj.weather[0].description}. </p>
                   <p> The Wind Speed is {Math.round(props.responseObj.wind.speed)} miles per hour! </p>
                   <p> Humidity is {Math.round(props.responseObj.main.humidity)}%. </p>
                   <p> With a max Tempature of {Math.round(props.responseObj.main.temp_max)}°C. </p>
                   <p> With a min Tempature of {Math.round(props.responseObj.main.temp_min)}°C. </p>

               </div>
           : null
           }
       </div>
   )
}
export default Conditions;