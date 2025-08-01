import { gql } from '@apollo/client';

const ADD_TRANSECTION = gql`
  mutation AddTransection(
      $account_id: ID!,
      $type : String!,
      $amount: Float!,
      $description: String,
      $date: String!) {
    createTransection (
      account_id : $account_id,
      type : $type ,
      amount : $amount,
      description: $description,
      date : $date) {
     id
     account_id
     type
     amount
     description
     date
    }
  }
`;

export default ADD_TRANSECTION