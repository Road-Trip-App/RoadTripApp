const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    roadTrips: [RoadTrip]
  }

  type RoadTrip {
    _id: ID
    name: String
    waypoints: [WayPoints]
  }

  type WayPoints {
    _id: ID
    name: [String]
    location: String
    duration: String
    comments: String
  
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user: User
    userByUsername(username: String!): User
    roadTrip(roadTripId: ID!): RoadTrip

  }
  
 
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
   # updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addRoadTrip(name: String!): RoadTrip
    # addWaypoint(RoadTripId: ID!): RoadTrip
    
  }
`;

module.exports = typeDefs;
