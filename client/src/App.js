import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
// import NewTrip from "./components/TripCard/TripCard";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import MapContainer from "./pages/MapContainer";
// import NewTripBtn from "./components/NewTripBtn/NewTripBtn";
import NewTripForm from "./components/NewTripForm/NewTripForm";
import WayPointForm from "./components/WaypointForm/WaypointForm";
import PinCard from "./components/PinCard/PinCard";
import NewPinBtn from "./components/NewPinBtn/NewPinBtn";
import TripCard from "./components/TripCard/TripCard";
import Auth from "./utils/auth";
import Forecast from "./components/Forecast/Forecast";
import Calandar from "./components/Calandar/Calandar";

export const weatherApiKey = process.env.REACT_APP_WEATHER_API;

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-400-vh w-full bg-blue spacing"> */}
        <Header />
        {/* <div className="container"> */}
        {!Auth.loggedIn() ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/calandar">
              <Calandar />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Forecast />
              <Dashboard />
            </Route>

            <Route exact path="/new-trip">
              <TripCard />
            </Route>

            <Route exact path="/SingleTripView">
              <MapContainer />
              <NewPinBtn />
              <PinCard />
            </Route>
            {/* silly test path */}
            <Route exact path="/banana">
              <NewTripForm />
            </Route>

            <Route exact path="/way-point">
              <WayPointForm />
            </Route>
          </>
        )}
        {/* </div> */}
        <Footer />
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
