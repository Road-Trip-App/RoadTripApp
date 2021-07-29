import React from 'react';
import NewTripForm from '../components/NewTripForm/NewTripForm';
import TripCard from '../components/TripCard/TripCard';
import WaypointForm from '../components/WaypointForm/WaypointForm';

const Home = () => {
  return (
    <div>
      <NewTripForm />
      <TripCard />
      <WaypointForm />
    </div>
  )
}

export default Home
