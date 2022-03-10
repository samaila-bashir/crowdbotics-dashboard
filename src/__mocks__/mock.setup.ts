import MockAxios from "axios-mock-adapter";
import {AxiosInstance} from 'axios';
import { mockApplication } from "./api";

const mockSetup = (axios: AxiosInstance) => {
    const mock = new MockAxios(axios);
    
    mockApplication(mock);

    return mock;
}

export default mockSetup;