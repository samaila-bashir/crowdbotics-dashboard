export enum ApplicationTypes {
    WEB = "Web",
    MOBILE = "Mobile"
};

export enum Framework {
    DJANGO = "Django",
    REACT_NATIVE = "React Native"
};

export interface AppsRequestObject {
    name: string;
    description?: string;
    type: ApplicationTypes;
    framework: Framework;
    domain_name?: string;
}

export interface AppResponseObject extends AppsRequestObject {
    id: number;
    subscription: number;
    screenshot?: string;
    user: number;
    created_at?: string;
    updated_at?: string;
}

export interface Plans {
    id: number;
    name: string;
    description: string;
    price?: string;
    created_at?: string; 
    updated_at?: string;
}

export interface Subscriptions {
    id: number; 
    user: number; 
    plan: number; 
    app: number;
    active: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface User {
    username: string;
    first_name?: string;
    last_name?: string; 
    email: string;
    password?: string; 
}

