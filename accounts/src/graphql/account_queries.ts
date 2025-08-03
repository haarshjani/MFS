import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query GetFilteredAccount($filter: AccountFilter) {
    allAccounts(filter: $filter) {
      id
      customer_id
      accountNumber
      balance
      currency
      Customer{
        name
        email
      }
      Transections{
      id
      type
      amount
      date
    }
    
    }
  }
`;
