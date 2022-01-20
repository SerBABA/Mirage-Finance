import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { initApolloClient } from "./config/initApolloClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={initApolloClient()}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
