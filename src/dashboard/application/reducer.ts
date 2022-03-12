import { GetApplicationActions, AddApplicationActions, UpdateApplicationActions, DeleteApplicationActions } from "./actions";

const initialState = {
    applications: [],
    applicationStatus: GetApplicationActions.GETAPPLICATION_DEFAULT,
    applicationError: "",

    addApplicationStatus: AddApplicationActions.ADDAPPLICATION_DEFAULT,
    addApplicationError: "",

    updateApplicationStatus: UpdateApplicationActions.UPDATEAPPLICATION_DEFAULT,
    updateApplicationError: "",

    deleteApplicationStatus: DeleteApplicationActions.DELETEAPPLICATION_DEFAULT,
    deleteApplicationError: "",
};

const applicationReducer = (state = {...initialState}, action: any) => {
    switch(action.type) {

        // Get All Application Actions 
        case GetApplicationActions.GETAPPLICATION_STARTED: {
            state = {...state, applicationStatus: GetApplicationActions.GETAPPLICATION_STARTED, applicationError: "" }

            return state; 
        }

        case GetApplicationActions.GETAPPLICATION_SUCCESSFUL: {
            const applications = action.payload.sort((a:any,b:any)=> a.name.toLowerCase() > b.name.toLowerCase());
            
            state = { ...state, applicationStatus: GetApplicationActions.GETAPPLICATION_SUCCESSFUL, applicationError: "", applications }

            return state; 
        }

        case GetApplicationActions.GETAPPLICATION_FAILED: {
            state = { ...state, applicationStatus: GetApplicationActions.GETAPPLICATION_FAILED, applicationError: action.payload }

            return state;
        }


        // Add Application Actions 
        case AddApplicationActions.ADDAPPLICATION_STARTED: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_STARTED, addApplicationError: "" }

            return state;
        }

        case AddApplicationActions.ADDAPPLICATION_SUCCESSFUL: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_SUCCESSFUL, addApplicationError: "" }

            return state;
        }

        case AddApplicationActions.ADDAPPLICATION_FAILED: {
            state = { ...state, addApplicationStatus: AddApplicationActions.ADDAPPLICATION_FAILED, addApplicationError: action.payload }

            return state;
        }


        // Update Application Actions 
        case UpdateApplicationActions.UPDATEAPPLICATION_STARTED: {
            state = { ...state, updateApplicationStatus: UpdateApplicationActions.UPDATEAPPLICATION_STARTED, updateApplicationError: "" }

            return state;
        }

        case UpdateApplicationActions.UPDATEAPPLICATION_SUCCESSFUL: {
            state = { ...state, updateApplicationStatus: UpdateApplicationActions.UPDATEAPPLICATION_SUCCESSFUL, updateApplicationError: "" }

            return state;
        }

        case UpdateApplicationActions.UPDATEAPPLICATION_FAILED: {
            state = { ...state, updateApplicationStatus: UpdateApplicationActions.UPDATEAPPLICATION_FAILED, updateApplicationError: action.payload }

            return state;
        }


        // Delete Application Actions 
        case DeleteApplicationActions.DELETEAPPLICATION_STARTED: {
            state = { ...state, deleteApplicationStatus: DeleteApplicationActions.DELETEAPPLICATION_STARTED, deleteApplicationError: "" }

            return state;
        }

        case DeleteApplicationActions.DELETEAPPLICATION_SUCCESSFUL: {
            const applications = state.applications.filter((application: any) => application.id !== action.payload);

            state = { ...state, deleteApplicationStatus: DeleteApplicationActions.DELETEAPPLICATION_SUCCESSFUL, deleteApplicationError: "", applications }

            return state;
        }

        case DeleteApplicationActions.DELETEAPPLICATION_FAILED: {
            state = { ...state, deleteApplicationStatus: DeleteApplicationActions.DELETEAPPLICATION_FAILED, deleteApplicationError: action.payload }

            return state;
        }

        default: 
            return state;
    }
}

export default applicationReducer;