// 1. Set up the client
// 2. Render some data from pet-library
// 3. Figure out the split link.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { BatchHttpLink } from "apollo-link-batch-http";

const uri = "https://pet-library.moonhighway.com/graphql";

// const batchHttpLink = new BatchHttpLink({ uri, batchInterval: 50, batchMax: 50 });
// batchInterval and batchMax defaults are 10ms
const httpLink = createHttpLink({ uri });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
