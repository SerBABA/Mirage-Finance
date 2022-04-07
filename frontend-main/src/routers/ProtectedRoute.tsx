import { Navigate, Route, RouteProps } from 'react-router';
import { useIsLoggedInQuery } from 'generated/graphql';
import { useEffect, useState } from 'react';
import { Loading } from 'components/loading';

type ProtectedRouteProps = {
  redirect?: string;
} & RouteProps;

export const ProtectedRoute = ({ redirect = '/login', ...route }: ProtectedRouteProps) => {
  const { loading, data, error } = useIsLoggedInQuery({
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // The !! is used to convert it to a boolean type.
    const newIsAuthenticated = !!(!error && (data?.isLoggedIn || loading));
    setIsAuthenticated(newIsAuthenticated);
  }, [data, loading, error]);

  if (loading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Route {...route} />;
  } else {
    return <Navigate to="/login" />;
  }
};
