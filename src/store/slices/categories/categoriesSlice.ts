import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, { payload }) => {
            state.name = payload
        },
    }
});

export const { addCategory } = categoriesSlice.actions

export default categoriesSlice.reducer