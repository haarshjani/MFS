// src/Accounts.tsx

import React from 'react';
import App from './router/AppRouter';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const RemoteAccounts = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);

export default RemoteAccounts;
