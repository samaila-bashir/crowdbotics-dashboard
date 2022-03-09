import React from "react";
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import AuthRoute from "./auth/auth.route";

import Dashboard from "./dashboard/Dashboard";


function App() {

  const Authtoken = "sjdndweqkjmx,mnfnmda";

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route  path="/auth">
            <AuthRoute />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Redirect from="*" to="/dashboard"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;