import axios from "axios";
import { ApplicationTypes, AppsRequestObject, AppResponseObject } from "../types/entities";
import { RequestResponse } from "../types/request.response";

const getApplications = async () : Promise<RequestResponse<AppResponseObject>> => {    
    try {
        const response = await axios.get('/api/v1/apps/');
        return { success: true, payload: response.data.payload }
    } catch(e) {
        const {message} = e as any;
        return { success: false, payload: message as string }
    }
}

const createApplication = async (application: AppsRequestObject) => {

}

const getApplication = async () => {

}

const updateApplication = async () => {

}

const deleteApplication = async () => {

}

const ActionsAPI = {
    createApplication,
    getApplications,
    getApplication,
    updateApplication,
    deleteApplication
}

export default ActionsAPI;