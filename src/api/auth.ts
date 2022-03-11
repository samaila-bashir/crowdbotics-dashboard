import axios from "axios";
import { RequestResponse } from "../types/request.response";
import { LoginRequestObject, SignupRequestObject } from "../types/auth";
import { User } from "../types/entities";

interface LoginPayload {
    key: string 
}

const login = async (authCredentials: LoginRequestObject) : Promise<RequestResponse<LoginPayload>> => {
    try {
        const response = await axios.post("/rest-auth/login/", authCredentials);
        console.log(response)
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

const signUp = async (authCredentials: SignupRequestObject) : Promise<RequestResponse<User>> => {
    try {
        const response = await axios.post("/rest-auth/registration/", authCredentials);        
        return {success: true, payload: response.data};
    } catch(e) {
        const error = e as any;
        let message:string;
        try{
            message = error.response.data.email[0];
        }catch{
            message = "Signup was unsuccessful.";
        }
        
        return {success: false, payload: message};
    }
}

const AuthAPI = {
    login,
    signUp
}

export default AuthAPI;