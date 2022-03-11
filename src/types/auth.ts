export interface LoginRequestObject {
    email: string;
    password: string;
}

export interface SignupRequestObject extends LoginRequestObject {
    name?: string;
    username?: string;
}