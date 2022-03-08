import React from "react";
import Application from "./dashboard/application/application.list/List.application";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Application />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;