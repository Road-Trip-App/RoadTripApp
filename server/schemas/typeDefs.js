const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    # users: [User]
    user(username: String!): User
    # me: User
  }
  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addWaypoint(RoadTrip: WayPoints!): User
    addTrip(RoadTrip): User
  }

  type RoadTrip {
    name: String
    waypoints: [Waypoints]
  }

  type WayPoints {
    name: [String]
    location: String
    duration: String
    comments: String
  
  }
`;

module.exports = typeDefs;
