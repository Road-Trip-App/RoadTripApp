import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = (props) => {
  const mapStyles = {
    height: "75vh",
    width: "100%",
  };

  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });
  return (
    <LoadScript googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY} >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      />
      
    </LoadScript>
  );
};

export default MapContainer;
