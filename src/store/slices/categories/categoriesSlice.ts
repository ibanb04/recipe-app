import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nameCategory: '',
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