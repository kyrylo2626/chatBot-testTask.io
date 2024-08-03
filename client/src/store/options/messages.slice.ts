import { createSlice } from '@reduxjs/toolkit'
import { IMessage } from '../../interfaces/Message.interface'


let initialState = [] as IMessage[];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: { 
        updateMessages: (_, action) => {
            initialState = [ ...initialState, action.payload ];
            return initialState;
        }
    }
})

export const { actions, reducer } = messagesSlice;