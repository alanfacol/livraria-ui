export interface Auth {
    token: string
}

export interface Login {
    username: string,
    password: string
}

export interface SignUp extends Login {
    name: string,
    document: string,
    birthdate: Date,
    pj: boolean
}