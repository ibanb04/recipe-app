import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nameCategory: 'dessert',
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, { payload }) => {
            state.nameCategory = payload
        },
    }
});

export const { addCategory } = categoriesSlice.actions

export default categoriesSlice.reducer