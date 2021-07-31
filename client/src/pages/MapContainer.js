import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Api from '../utils/API';
// import Marker from '@material-ui/icons/LocationOnOutlined'



import React from "react";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
 // Marker,
} from "react-google-maps";



  function Map(props) {
  
    return (
      <div>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 45.4230016, lng: -75.6312533 }}
          libraries
          //defaultOptions={{ styles: mapStyles }}
        >
          {/* <Marker lat={45.4230016} lng={-75.6312533} icon={{url:"http://chart.apis.google.com/chart?chst=d_map_pin_shadow"}}/> */}
        </GoogleMap>
        <div>
       <Search />
        </div>
      </div>
    
    );
  }
 

  
  const MapWrapped = withScriptjs(withGoogleMap(Map));


<<<<<<< HEAD
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
    
=======
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const getDirections = () => {
    Api.getDirections().then((data) => console.log('LOOK', data))
  }
  //Api.getDirections().then((data) => console.log('LOOK', data))

  return (
    <>
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      />

      <div
        className=""
        onClick={() =>
          window.open(
            "https://maps.google.com?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}"
          
          )
        }
      >
        <i className=""></i> Go{" "}
      </div>
      <AnyReactComponent
            lat={43.6532}
            lng={79.3832}
            text="My Marker"
          />

<a href="http://maps.google.com/?q=100 Montreal rd, Ottawa">Go no</a>
    </LoadScript>
    <button
      onClick={getDirections}
    >
      YO
    </button>

    </>
>>>>>>> 06ac159ae5d6eb332e2d5b503aea6754a43f85b1
  );
}

