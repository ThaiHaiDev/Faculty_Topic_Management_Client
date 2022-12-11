export interface SigninRequest {
    email: string,
    password: string
}

export interface SignupRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mssv: string,
    phone: string,
    role?: string
}

export interface SigninErrorResponse {
    code: string,
    message: string,
}

export interface SignupErrorResponse {
    code: string,
    message: string,
}