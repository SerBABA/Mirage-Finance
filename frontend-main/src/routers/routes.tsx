import { RouteObject } from 'react-router-dom';

import { Landing } from 'views/landing';
import { Login } from 'views/login';
import { Register } from 'views/register';
import { Dashboard } from 'views/dashboard';
import { Layout } from 'components/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];
