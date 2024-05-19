import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setData } = globalSlice.actions

export default globalSlice.reducer
