import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import NewTripBtn from '../components/NewTripBtn/NewTripBtn';

// import NewPinBtn from '../components/NewPinBtn/NewPinBtn';
import TripCard from '../components/TripCard/TripCard'
import { QUERY_USER } from '../utils/queries';

const userName = Auth.getProfile().data.username;
//console.log(userName);

function Dashboard() {

    const { data } = useQuery(QUERY_USER, {
        variables: { username: userName },
      });
    
    console.log(data);
    return(
        
    <div>
      
        <NewTripBtn />
        
        <TripCard />
       
    </div>


    );
}

export default Dashboard;
