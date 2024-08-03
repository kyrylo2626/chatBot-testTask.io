export interface IChat {
    _id: string,
    user: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface ICreateChat {
    user: string,
    name: string
}

export interface IUpdateChat {
    name: string
}