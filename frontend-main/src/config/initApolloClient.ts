import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";
import Cookies from "js-cookie";

type PerformFetchResponse = {
  readableResponse: any;
  unreadResponse: Response;
};

const performFetch = async (
  input: RequestInfo,
  init: RequestInit | undefined
): Promise<PerformFetchResponse> => {
  const readableResponse = await fetch(input, init);
  const unreadResponse = readableResponse.clone();
  const json = await readableResponse.json();
  return { readableResponse: json, unreadResponse };
};

const customFetch = async (input: RequestInfo, init?: any | undefined): Promise<Response> => {
  try {
    const firstRequest = await performFetch(input, init);
    let refetch = false;

    if (firstRequest.readableResponse.errors) {
      await firstRequest.readableResponse.errors.forEach((err: any) => {
        if (err.extensions && err.extensions.code === "UNAUTHENTICATED") {
          refetch = true;
        }
      });
    }

    if (refetch) {
      const accessToken = await getNewToken();

      if (accessToken && init && init.headers) {
        init.headers.authorization = accessToken;
        const secondRequest = await performFetch(input, init);
        return secondRequest.readableResponse;
      }
    }

    return firstRequest.unreadResponse;
  } catch (err) {
    console.log(err);
  }
  return (await performFetch(input, init)).unreadResponse;
};

/**
 * The terminating link that performs the call to the graphql server.
 */
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URL!,
  credentials: "include",
  fetch: customFetch,
});

const authLink = setContext(async (_operation, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `${Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME!)}`,
    },
  };
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
    link: from([retryLink, authLink, httpLink]),
  });
}
