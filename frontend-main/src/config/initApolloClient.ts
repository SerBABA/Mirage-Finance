import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";
import Cookies from "js-cookie";

/**
 * The terminating link that performs the call to the graphql server.
 */
const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URL!,
  credentials: "include",
});

const authLink = setContext(async (_operation, { headers }) => {
  const accessToken = await getNewToken().catch(() => "");

  const authHeader = accessToken
    ? accessToken
    : Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME!);

  const newHeaders = {
    headers: {
      ...headers,
      authorization: `${authHeader}`,
    },
  };

  return newHeaders;
});

const getNewToken: () => Promise<string> = async () => {
  const response = await axios.post(
    process.env.REACT_APP_REFRESH_TOKEN_URL!,
    { accessToken: Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME!) },
    { withCredentials: true }
  );
  const { accessToken } = response.data;
  Cookies.set(process.env.REACT_APP_ACCESS_TOKEN_NAME!, accessToken ? accessToken : "");
  return accessToken ? accessToken : "";
};

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((err) => {
      if (err.extensions && err.extensions.code === "UNAUTHENTICATED") {
      }
    });
});

const retryLink = new RetryLink({
  attempts: {
    retryIf: (error, _operation) => {
      return !!error;
    },
  },
});

export function initApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([retryLink, errorLink, authLink, httpLink]),
  });
}
