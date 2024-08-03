import { createSlice } from '@reduxjs/toolkit'


let initialState = '';

export const searchChatSlice = createSlice({
    name: 'searchChat',
    initialState,
    reducers: { 
        setSearchChat: (_, action) => {
            initialState = action.payload;
            return initialState;
        }
    }
})

export const { actions, reducer } = searchChatSlice;