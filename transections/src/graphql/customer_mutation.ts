import { gql } from '@apollo/client';

const ADD_CUSTOMER = gql`
  mutation AddCustomer($name: String!, $email: String!) {
    createCustomer(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($id: ID!, $name: String, $email: String) {
    updateCustomer(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export  {ADD_CUSTOMER as default, UPDATE_CUSTOMER}; ;