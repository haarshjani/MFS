import React, { ReactNode, useEffect, useState } from "react";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";
import MaterialCommunityIconsFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';


const Providers = ({ children }: { children: ReactNode }) => {
  

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
        <PaperProvider >
          <>
           {Platform.OS === 'web' ? (
      <style type="text/css">{
         `
  @font-face {
    font-family: 'MaterialCommunityIcons';
    src: url(${MaterialCommunityIconsFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`
      }</style>
    ) : null}
     {children}
          </>
           
        
        </PaperProvider>
      </SafeAreaProvider>
     </ApolloProvider>
     </Provider>
  );
};

export default Providers;
