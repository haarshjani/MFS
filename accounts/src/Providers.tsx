import React, { ReactNode, useEffect, useState } from "react";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Providers = ({ children }: { children: ReactNode }) => {
    const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    MaterialCommunityIcons.loadFont().then(() => setIsFontLoaded(true));
  }, []);
  if (!isFontLoaded) return null;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
        <PaperProvider >
          
            {children}
        
        </PaperProvider>
      </SafeAreaProvider>
     </ApolloProvider>
     </Provider>
  );
};

export default Providers;
