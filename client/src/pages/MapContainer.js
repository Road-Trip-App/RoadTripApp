import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Api from '../utils/API';
// import Marker from '@material-ui/icons/LocationOnOutlined'




const MapContainer = (props) => {

  const AnyReactComponent = ({text}: any) => <div>{text}</div>;
  const mapStyles = {
    height: "25vh",
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
  );
};

export default MapContainer;
