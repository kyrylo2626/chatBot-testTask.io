export interface IMessage {
    _id: string,
    chat: string,
    from_bot: boolean,
    text: string,
    edited: boolean,
    createdAt: Date,
    updatedAt: Date,
    __v: number,
    chat_name?: string
}

export interface ILastMessage {
    message: IMessage,
    chat_name: string
}

export interface ICreateMessage {
    chat: string,
    from_bot?: boolean,
    text: string
}

export interface IUpdateMessage {
    text: string
}


export interface IGetAPIMessage {
    _id: string,
    content: string,
    author: string,
    authorSlug: string,
    length: number,
    dateAdded: string,
    dateModified: string,
    tags: string[]
}

export interface IAPIMessage {
    content: string,
    user: string,
    timeCreate: Date
}