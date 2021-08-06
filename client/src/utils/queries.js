import { gql } from '@apollo/client';


export const QUERY_USER = gql`

  query userByUsername($username: String!) {
    
      user(username: $username) {
        _id
        username
        email
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

