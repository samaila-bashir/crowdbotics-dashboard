export interface RequestResponse<T> {
    success: boolean; 
    payload: T | T[]
}