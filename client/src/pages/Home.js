import React from "react";
import Image from "../assets/roadtripphoto.jpg";
import Button from "react-bootstrap/button";
import Calandar from "../components/Calandar/Calandar";
import Card from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import homestyle from  "./home.css"

function Home() {
  return (
    <>
    <div className="homestyle">
      <p className="homestyle">
        Welcome to RoadTripPin! Where you can store your pins to make sure you
        don't miss a stop on your trip!
      </p>
      <Card className="d-flex justify-content-center homestyle">
        
          <Link to="/calandar">
            <Button onclick={Calandar} className="startBtn" variant="primary">
              Check The Calendar
            </Button>
          </Link>
  
      </Card>

      <img src={Image} alt="Car Driving" Height="760" width="2000" />
    </div>
    </>
  );
}

export default Home;
