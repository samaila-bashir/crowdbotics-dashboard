import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import AuthRoute from "./auth/auth.route";
import Dashboard from "./dashboard/Dashboard";
import { useSelector } from "react-redux";

function App() {

  const {token} = useSelector((store: any) => (
    {
      token: store.auth.token
    }
  ));

  return (
        <Router>
            <Switch>
              <Route path="/auth">
                {
                  token ? <Redirect from="/auth" to="/dashboard"/>
                  : <AuthRoute />
                }
              </Route>
              <Route path="/dashboard">
                 {
                  token ?  <Dashboard />
                  : <AuthRoute />
                }
               
              </Route>
              <Redirect from="*" to="/auth"/>
            </Switch>
        </Router>
  );
}

export default App;