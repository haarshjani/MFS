import { gql } from '@apollo/client';

export const GET_All_CUSTOMERS = gql`
  query GetFilterCustomers(
  $page : Int,
  $perPage : Int,
  $filter : CustomerFilter){
    allCustomers (
    page : $page,
    perPage : $perPage,
    filter : $filter){
      id
      name
      email
      Accounts{
        id
        customer_id
        accountNumber
        balance
        currency
    }
    }
  }
`;
