import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Header from './components/Header';
import NewTrip from './components/TripCard/TripCard';
import Footer from './components/Footer';
// import MapContainer from './pages/MapContainer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MapContainer from './pages/MapContainer';
import NewTripBtn from './components/NewTripBtn/NewTripBtn';





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
        <div className="flex-column justify-flex-start min-1200-vh w-full bg-blue">
          <Header />
          <div className="container">
            <Route exact path="/">
              <MapContainer className="flex-column justify-flex-start min-1200-vh w-full bg-blue"/>
              <NewTripBtn />
              <Home  />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route  exact path="/new-trip">
              <NewTrip />
            </Route>
            {/* silly test path */}
            <Route exact path="/banana">
              <h1>BANANA YAAAAAAAY</h1>
            </Route>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
