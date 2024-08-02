export interface IAccount {
    _id: string,
    email: string,
    password: string,
    google: boolean,
    facebook: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface ICreateAccount {
    email: string,
    password: string,
    google?: boolean,
    facebook?: boolean
}

export interface IUpdateAccount {
    password?: string,
    google?: boolean,
    facebook?: boolean
}