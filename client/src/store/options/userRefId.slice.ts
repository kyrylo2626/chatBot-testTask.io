import { createSlice } from '@reduxjs/toolkit'


let initialState = '';

export const userRefIdSlice = createSlice({
    name: 'userRefId',
    initialState,
    reducers: { 
        setUserRefId: (_, action) => {
            initialState = action.payload;
            return initialState;
        }
    }
})

export const { actions, reducer } = userRefIdSlice;