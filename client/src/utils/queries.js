import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      roadTrips {
        _id
        name
      }
    }
  }
`;

// export const QUERY_USER = gql`
//   {
//     user {
//       username
//       email
      
//   }
// `;

export const QUERY_USER_BY_USER = gql`
  query userByUsername($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      roadTrips {
        _id
        name
        waypoints {
          _id
          name
          location
          duration
          comments
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      roadTrips {
        _id
        name
      }
    }
  }
`;
