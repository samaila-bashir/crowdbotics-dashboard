import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./login/Login";
import Signup from "./signup/Signup";
import ResetForm from "./password.reset/Reset.form";

const AuthRoute = () => {
    return (
        <Switch>
            <Route exact path="/auth/login">
                <Login />
            </Route>
            <Route path="/auth/signup">
                <Signup />
            </Route>
            <Route path="/auth/reset-password">
                <ResetForm />
            </Route>
            <Redirect path="*" to="/auth/login" />       
        </Switch>
    );
}

export default AuthRoute; 