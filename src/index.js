import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { BatchHttpLink } from "apollo-link-batch-http";

const uri = "https://pet-library.moonhighway.com/graphql";

const batchHttpLink = new BatchHttpLink({
  uri,
  batchInterval: 1000,
  // maximum number of operations
  batchMax: 10
});

// const httpLink = createHttpLink({ uri });

const client = new ApolloClient({
  link: batchHttpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
