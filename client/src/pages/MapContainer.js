import React from "react";
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



  function Map(props) {
  
  
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 45.4230016, lng: -75.6312533 }}
        //defaultOptions={{ styles: mapStyles }}
      >
        <Marker lat={45.4230016} lng={-75.6312533} icon={{url:"http://chart.apis.google.com/chart?chst=d_map_pin_shadow"}}/>
      </GoogleMap>
    );
  }
 

  
  const MapWrapped = withScriptjs(withGoogleMap(Map));


 export default function App() {
  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
