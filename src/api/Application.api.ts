import axios from "axios";
import { ApplicationTypes, AppsRequestObject, AppResponseObject } from "../types/entities";
import { RequestResponse } from "../types/request.response";

const getApplications = async () : Promise<RequestResponse<AppResponseObject>> => {    
    try {
        const response = await axios.get('/api/v1/apps/');
        console.log(response.data);
        return { success: true, payload: response.data }
    } catch(e) {
        const error = e as any;
        console.log(error.response);
        return { success: false, payload: "kdf" as string }
    }
}

const createApplication = async (application: AppsRequestObject) => {

}

const updateApplication = async () => {

}

const deleteApplication = async () => {

}

const ActionsAPI = {
    createApplication,
    getApplications,
    updateApplication,
    deleteApplication
}

export default ActionsAPI;