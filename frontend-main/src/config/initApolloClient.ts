import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { RetryLink } from "@apollo/client/link/retry";
import axios from "axios";

/**
 * The terminating link that performs the call to the graphql server.
 */
const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URL!,
  credentials: "include",
});

/**
 * On an error we perform a check for if we got an UNAUTHENTICATED code. This would mean that we are going to try and perform a
 * refresh token action incase it was the issue.
 */
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((err) => {
      if (err.extensions && err.extensions.code === "UNAUTHENTICATED") {
        if (!operation.getContext().requesting_refresh_token) {
          operation.setContext({ requesting_refresh_token: true });
          return axios
            .post(process.env.REACT_APP_REFRESH_TOKEN_URL!, {}, { withCredentials: true })
            .then(() => forward(operation))
            .catch(() => {});
        }
      }
    });
});

/**
 * Tries to contact the server up to 3 times. Otherwise fails.
 */
const retryLink = new RetryLink({
  delay: {
    max: Infinity,
    initial: 100,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: (error, _operation) => {
      return !!error;
    },
  },
});

/**
 * Initiates the ApolloClient. This includes the links and cache definition.
 *
 * @returns The initiated apolloclient.
 */
export function initApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([retryLink, errorLink, httpLink]),
  });
}
