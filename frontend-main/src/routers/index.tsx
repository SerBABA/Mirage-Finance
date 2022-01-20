import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

export const AppRoutes = () => {
  const Routes = useRoutes(routes);
  return <>{Routes}</>;
};
