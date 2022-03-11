import { LoginActions, SignupActions, LogoutAction } from "./actions";

const initialState = {
    loginStatus: LoginActions.LOGIN_DEFAULT,
    loginError: "", 
    token: "",
    signupStatus: SignupActions.SIGNUP_DEFAULT,
    signupError: "",
    user: {}
};

const authReducer = (
    state = {...initialState}, 
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

        case SignupActions.SIGNUP_DEFAULT: {
            state = {...state, signupStatus: SignupActions.SIGNUP_DEFAULT, signupError: ""}

            return state;
        }

        case SignupActions.SIGNUP_STARTED: {
            state = {...state, signupStatus: SignupActions.SIGNUP_STARTED, signupError: ""}

            return state;
        }

        case SignupActions.SIGNUP_FAILED: {
            state = {...state, signupStatus: SignupActions.SIGNUP_FAILED, signupError: action.payload}

            return state;
        }

        case SignupActions.SIGNUP_SUCCESSFUL: {
            state = {...state, signupStatus: SignupActions.SIGNUP_SUCCESSFUL, signupError: "", token: action.payload.key}

            return state;
        }

        case LogoutAction: {
            state = {...initialState};

            return state;
        }

        default: 
            return state;
    }
}

export default authReducer;