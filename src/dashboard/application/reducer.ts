import { GetApplicationActions } from "./actions";

const initialState = {
    applications: [],
    applicationStatus: GetApplicationActions.GETAPPLICATION_DEFAULT,
    applicationError: ""
};

const applicationReducer = (state = {...initialState}, action: any) => {
    switch(action.type) {
        case GetApplicationActions.GETAPPLICATION_STARTED: {
            state = {...state, applicationStatus: GetApplicationActions.GETAPPLICATION_STARTED, applicationError: "" }

            return state; 
        }

        case GetApplicationActions.GETAPPLICATION_SUCCESSFUL: {
            state = { ...state, applicationStatus: GetApplicationActions.GETAPPLICATION_SUCCESSFUL, applicationError: "", applications: action.payload }

            return state; 
        }

        case GetApplicationActions.GETAPPLICATION_FAILED: {
            state = { ...state, applicationStatus: GetApplicationActions.GETAPPLICATION_FAILED, applicationError: action.payload }

            return state;
        }

        default: 
            return state;
    }
}

export default applicationReducer;