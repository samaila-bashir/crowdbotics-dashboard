import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./login/Login";
import Signup from "./signup/Signup";

const AuthRoute = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Redirect path="*" to="/login" />       
        </Switch>
    );
}

export default AuthRoute; 