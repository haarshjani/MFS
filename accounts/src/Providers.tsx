import React, { ReactNode, useEffect, useState } from "react";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";


const Providers = ({ children }: { children: ReactNode }) => {
  

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
        <PaperProvider >
          <>
           {Platform.OS === 'web' && ( <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css"
  />
)}
     {children}
          </>
           
        
        </PaperProvider>
      </SafeAreaProvider>
     </ApolloProvider>
     </Provider>
  );
};

export default Providers;
