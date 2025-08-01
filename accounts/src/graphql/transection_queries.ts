import { gql } from '@apollo/client';

const GET_FILTERED_TRANSACTIONS = gql`
  query GetFilteredTransactions(
    $page: Int,
    $perPage: Int,
    $filter: TransectionFilter
  ) {
    allTransections(
      page: $page,
      perPage: $perPage,
      filter: $filter
    ) {
      id
      account_id
      type
      amount
      description
      date
      Account{
        id
        customer_id
        accountNumber
        balance
        currency
      }
    }
  }
`;

export { GET_FILTERED_TRANSACTIONS };