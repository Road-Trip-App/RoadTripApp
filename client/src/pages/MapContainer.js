import React from "react";
import Search from "../components/Search/Search";
import { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// const libraries = ["places"];

//import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";

// import Marker from '@material-ui/icons/LocationOnOutlined'
// const MapContainer = (props) => {
//   const AnyReactComponent = ({text}: any) => <div>{text}</div>;
//   const mapStyles = {
//     height: "25vh",
//     width: "100%",
//   };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success);
  // });



  class Map extends React.Component {
  
  
    render () {
    
    return (
      <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 45.4230016, lng: -75.6312533 }}
        //defaultOptions={{ styles: mapStyles }}
      >
        <Marker position={{lat: 45.439570,lng: -75.652608}}/>, 
      </GoogleMap>
     
      </div>
    );
  }

}
 

  
  const MapWrapped = withScriptjs(withGoogleMap(Map));
console.log(process.env);

 export default function App() {
  return (
    <div style={{ width: "80vw", height: "40vh" }}>
      <MapWrapped
           
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
