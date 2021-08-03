import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                   <p>It currently feels like {Math.round(props.responseObj.feelslike)} </p>
                   <p>Humidity is {Math.round(props.responseObj.main.humidity)}</p>
                   <p>With a max Tempature of {Math.round(props.responseObj.main.temp_max)}</p>
                   <p>With a min Tempature of {Math.round(props.responseObj.tempmin)}</p>

               </div>
           : null
           }
       </div>
   )
}
export default Conditions;