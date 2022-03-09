import React from "react";
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import AuthRoute from "./auth/auth.route";

import Application from "./dashboard/application/application.list/List.application";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <AuthRoute />
          </Route>
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;