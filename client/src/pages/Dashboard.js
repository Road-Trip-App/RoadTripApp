import React from "react";
import { useQuery } from "@apollo/client";
//import Auth from '../utils/auth';
// import { useParams } from 'react-router-dom';

import NewTripBtn from "../components/NewTripBtn/NewTripBtn";

// import NewPinBtn from '../components/NewPinBtn/NewPinBtn';
import TripCard from "../components/TripCard/TripCard";
import { QUERY_ME } from "../utils/queries";

//const userName = Auth.getProfile().data.username;
//console.log(userName);

const Dashboard = () => {
  // const {  userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);
  let userData = "";
  console.log(data);
  if (loading) {
    console.log("loading user");
  } else {
    if (data !== undefined) {
      userData = data.me;
    }
    console.log(userData);
  }

  // const { loading, data } = useQuery(QUERY_USER, {
  //     variables: {  username: "jeff" },
  //   });
  // const { data } = useQuery(QUERY_USER, {
  //     variables: { username: userName },
  //   });

  return (
    <div>
      <NewTripBtn />

      <TripCard />
    </div>
  );
};

export default Dashboard;
