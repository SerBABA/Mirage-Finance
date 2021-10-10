import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "views/landing";
import { Login } from "views/login/index";
import { Register } from "views/register/index";
import Home from "views/dashboard/home";
import ProtectedRoute from "./ProtectedRoute";

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <ProtectedRoute path="/dashboard/home" component={Home} />
      </Switch>
    </Router>
  );
}
