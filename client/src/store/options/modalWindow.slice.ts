import { createSlice } from '@reduxjs/toolkit'


let initialState = { create: false, edit: false, delete: false, logout: false };

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: { 
        toggleModalWindow: (_, action) => {
            initialState = { ...initialState, ...action.payload };
            return initialState;
        }
    }
})

export const { actions, reducer } = modalWindowSlice;