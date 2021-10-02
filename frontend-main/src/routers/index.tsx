import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "views/landing";
import { Login } from "views/login/index";
import { Register } from "views/register/index";
import Dashboard from "views/dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
