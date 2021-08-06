import React from "react";
import NewTripBtn from "../components/NewTripBtn/NewTripBtn";
import TripCard from "../components/TripCard/TripCard";

function Dashboard() {
  return (
    <div>
      <NewTripBtn />
      <TripCard />
    </div>
  );
}

export default Dashboard;
