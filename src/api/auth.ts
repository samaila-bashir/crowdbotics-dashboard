import axios from "axios";
import { RequestResponse } from "../types/request.response";
import { LoginRequestObject } from "../types/auth";

interface LoginPayload {
    key: string 
}

const login = async (authCredentials: LoginRequestObject) : Promise<RequestResponse<LoginPayload>> => {
    try {
        const response = await axios.post("/rest-auth/login/", authCredentials);
        
        return {success: true, payload: response.data};
    } catch(e) {
        const error = e as any;
        let message:string;

        try{
            message = error.response.data.non_field_errors[0];
        }catch{
            message = "Login was unsuccessful.";
        }
        
        return {success: false, payload: message};
    }
}

const AuthAPI = {
    login
}

export default AuthAPI;