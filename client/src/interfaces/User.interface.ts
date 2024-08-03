export interface IUser {
    _id: string,
    user: string,
    first_name: string,
    last_name: string,
    sex: string,
    online: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface ICreateUser {
    user: string,
    first_name: string,
    last_name: string,
    sex: string
}

export interface IUpdateUser {
    first_name: string,
    last_name: string,
    sex: string,
    online: boolean
}