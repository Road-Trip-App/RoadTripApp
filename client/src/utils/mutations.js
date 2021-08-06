import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_THOUGHT = gql`
//   mutation addRoadTrip($name: String!) {
//     addRoadTrip(name: $name) {
//       _id
//       name
//       waypoints {
//         _id
//         name   
//         location
//         duration
//         comments
//       }
//     }
//   }
// `;


// export const ADD_WAYPOINT = gql`
//   mutation addWayPoint($RoadTripId: ID!, $commentText: String!) {
//     addComment(thoughtId: $RoadTripId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;