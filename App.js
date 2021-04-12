import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ApplicationStack from "./src/navigation/stackNav";
import { navigationRef } from "./src/navigation/navService";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <ApplicationStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
