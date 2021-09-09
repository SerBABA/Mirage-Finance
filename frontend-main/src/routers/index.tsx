import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DataTable from "./DataTable";
import DistrbutionChart from "components/DistributionChart";
import LandingPage from "views/landing";
import Login from "views/login/index";
import Register from "views/register/index";

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <Route path="/example" component={DistrbutionChart} />
      </Switch>
    </Router>
  );
}
