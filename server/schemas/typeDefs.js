const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }
  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addWaypoint(RoadTrip: Waypoint!): User
    addTrip(RoadTrip): User
  }

  type RoadTrip {
    origin: String!
    destination: String!
}

input Waypoint {
  Name: [String]
  location: String!
  Duration: String
  Comments: String
  Completed: Boolean
  RoadTrip: [RoadTrip]!
}


`;

module.exports = typeDefs;
