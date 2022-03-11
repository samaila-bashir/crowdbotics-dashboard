import { LoginActions } from "./actions";

const authReducer = (
    state = {
        loginStatus: LoginActions.LOGIN_DEFAULT,
        loginError: "", 
        token: ""
    }, 
        action: any) => 
    {
    switch (action.type) {
        case LoginActions.LOGIN_DEFAULT: {
            state = {...state, loginStatus: LoginActions.LOGIN_DEFAULT, loginError: ""}
            return state;
        }

        case LoginActions.LOGIN_STARTED: {
            state = {...state, loginStatus: LoginActions.LOGIN_STARTED, loginError: ""}
            return state;
        }

        case LoginActions.LOGIN_FAILED: {
            state = {...state, loginStatus: LoginActions.LOGIN_FAILED, loginError: action.payload}
            return state;
        }

        case LoginActions.LOGIN_SUCCESSFUL: {
            state = {...state, loginStatus: LoginActions.LOGIN_SUCCESSFUL, loginError: "", token: action.payload.key}
            return state;
        }

        default: 
            return state;
    }
}

export default authReducer;