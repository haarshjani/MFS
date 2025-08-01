import { gql } from '@apollo/client';

const ADD_ACCOUNT = gql`
  mutation AddAccount(
  $customer_id: ID!,
  $accountNumber: String!,
  $balance: Float!,
  $currency: String!) {
    createAccount(
    customer_id: $customer_id,
    accountNumber:  $accountNumber,
    balance:$balance,
    currency: $currency) {
        id
        customer_id
        accountNumber
        balance
        currency
    
    }
  }
`;

const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($id: ID!, $amount : Float ) {
    updateAccount(id: $id, balance: $amount ) {
      id
      customer_id
      accountNumber
      balance

    }
  }
`;

export {ADD_ACCOUNT, UPDATE_ACCOUNT}