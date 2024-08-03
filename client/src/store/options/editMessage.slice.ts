import { createSlice } from '@reduxjs/toolkit';
import { IEditMessage } from '../../interfaces/Message.interface'

let initialState = {} as IEditMessage;


export const editMessageSlice = createSlice({
    name: 'editMessage',
    initialState,
    reducers: { 
        editMessageMode: (_, action) => {
            initialState = action.payload;
            return initialState;
        }
    }
})

export const { actions, reducer } = editMessageSlice;