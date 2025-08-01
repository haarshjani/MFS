// src/Accounts.tsx

import React from 'react';
import App from './router/AppRouter';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper'

const RemoteTransection = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <PaperProvider>
      <App />
      </PaperProvider>
       </SafeAreaProvider>
    </ApolloProvider>
   
  </Provider>
);

export default RemoteTransection;
