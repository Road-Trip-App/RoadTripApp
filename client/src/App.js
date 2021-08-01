import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Header from './components/Header';
import NewTrip from './components/TripCard/TripCard';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MapContainer from './pages/MapContainer';
import NewTripBtn from './components/NewTripBtn/NewTripBtn';
import NewTripForm from './components/NewTripForm/NewTripForm';
import WayPointForm from './components/WaypointForm/WaypointForm';
import SingleTripView from './components/SingleTripView/SingleTripView.js';






const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <div className="flex-column justify-flex-start min-400-vh w-full bg-blue">
          <Header />
          <div className="container">
            <Route exact path="/">
              <NewTripBtn />
            </Route>
            <Route exact path="/dashboard">
              <NewTripBtn />
            </Route>
            <NewTrip />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route  exact path="/new-trip">
              <NewTrip />
            </Route>
            <Route  exact path="/SingleTripView">
            <MapContainer/>
              <SingleTripView />
            </Route>
            {/* silly test path */}
            <Route exact path="/banana">
              <NewTripForm/>
            </Route>
            <Route exact path="/way-point">
              <WayPointForm />
            </Route>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
