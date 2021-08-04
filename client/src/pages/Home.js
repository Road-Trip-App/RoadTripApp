import React from "react";
import Image from "../assets/roadtripphoto.jpg";

export function Home() {
  return (
    <div className="homestyle">
      <p className="homestyle">
        Welcome to RoadTripPin! Where you can store your pins to make sure you
        don't miss a stop on your trip!
      </p>

      <img src={Image} alt="Car Driving" Height="760" width="2000"/>
    </div>
  );
}

export default Home;
