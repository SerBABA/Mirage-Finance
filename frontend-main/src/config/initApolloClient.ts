import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { RetryLink } from "@apollo/client/link/retry";

const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_SERVER_URL!,
  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((err) => {
      if (err.extensions && err.extensions.code === "UNAUTHENTICATED") {
        console.log(operation.getContext());
        forward(operation);
      }
    });
});

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

export function initApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([retryLink, errorLink, httpLink]),
  });
}
