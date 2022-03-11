import { combineReducers} from "redux";
import authReducer from "../auth/reducer";
import applicationReducer from "../dashboard/application/reducer";

const rootReducer = combineReducers({ 
    auth: authReducer,
    application: applicationReducer
 });

 export default rootReducer;