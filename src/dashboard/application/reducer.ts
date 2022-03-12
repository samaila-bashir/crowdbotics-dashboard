import { GetApplicationActions, AddApplicationActions } from "./actions";

const initialState = {
    applications: [],
    applicationStatus: GetApplicationActions.GETAPPLICATION_DEFAULT,
    applicationError: "",

    addApplicationStatus: AddApplicationActions.ADDAPPLICATION_DEFAULT,
    addApplicationError: "",
};

const applicationReducer = (state = {...initialState}, action: any) => {
    switch(action.type) {

        // Get All Application Actions 
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

        // Add Application Actions 
        case AddApplicationActions.ADDAPPLICATION_STARTED: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_STARTED, applicationError: "" }

            return state;
        }

        case AddApplicationActions.ADDAPPLICATION_SUCCESSFUL: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_SUCCESSFUL, applicationError: "" }

            return state;
        }

        case AddApplicationActions.ADDAPPLICATION_FAILED: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_FAILED, applicationError: action.payload }

            return state;
        }

        default: 
            return state;
    }
}

export default applicationReducer;