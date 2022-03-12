import axios from "axios";
import { ApplicationTypes, AppsRequestObject, AppResponseObject } from "../types/entities";
import { RequestResponse } from "../types/request.response";

const getApplications = async () : Promise<RequestResponse<AppResponseObject>> => {    
    try {
        const response = await axios.get('/api/v1/apps/');
        return { success: true, payload: response.data }
    } catch {
        return { success: false, payload: "Could get applications." }
    }
}

const createApplication = async (application: AppsRequestObject) => {
    try {
        const response = await axios.post('/api/v1/apps/', application);
        return { success: true, payload: response.data }
    } catch {
        return { success: false, payload: "Could not add application." }
    }
}

const updateApplication = async (application: AppsRequestObject, id: number) => {
    try {
        const response = await axios.put(`/api/v1/apps/${id}/`, application);
        return { success: true, payload: response.data }
    } catch {
        return { success: false, payload: "Could not update application." }
    }
}

const deleteApplication = async (id: number) => {
    try {
        const response = await axios.delete(`/api/v1/apps/${id}/`);
        return { success: true, payload: response.data }
    } catch {
        return { success: false, payload: "Could not delete application." }
    }
}

const ApplicationActionsAPI = {
    createApplication,
    getApplications,
    updateApplication,
    deleteApplication
}

export default ApplicationActionsAPI;