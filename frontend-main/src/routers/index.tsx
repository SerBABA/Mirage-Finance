import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DataTable from "./DataTable";
import DistrbutionChart from "components/DistributionChart";
import LandingPage from "views/landing";
import Login from "views/login/index";

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/example">
          <DistrbutionChart />
        </Route>
      </Switch>
    </Router>
  );
}
