import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import AuthRoute from "./auth/auth.route";
import Dashboard from "./dashboard/Dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReduxConfig from "./config/store";

const { store, persistor } = ReduxConfig();

function App() {

  const Authtoken = "sjdndweqkjmx,mnfnmda";

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
            <Switch>
              <Route path="/auth">
                <AuthRoute />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Redirect from="*" to="/auth"/>
            </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;