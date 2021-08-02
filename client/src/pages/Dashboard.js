import React from 'react';

import NewTripBtn from '../components/NewTripBtn/NewTripBtn';

import NewPinBtn from '../components/NewPinBtn/NewPinBtn';
import TripCard from '../components/TripCard/TripCard'

export function Dashboard() {
    return(
        
    <div>

        <NewTripBtn />
        
        <TripCard />
       
    </div>


    );
}

export default Dashboard;
