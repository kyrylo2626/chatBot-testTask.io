import { createSlice } from '@reduxjs/toolkit'


let initialState = '';

export const chatRefIdSlice = createSlice({
    name: 'chatRefId',
    initialState,
    reducers: { 
        setChatRefId: (_, action) => {
            initialState = action.payload;
            return initialState;
        }
    }
})

export const { actions, reducer } = chatRefIdSlice;