import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/Categories";

const INITIAL_STATE = {
    categories: Categories,
    categorySelected : null, 
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: (state) => {
            return state;
        },
        categorySelect: (state, action) => {
            return {
                ...state,
                categorySelected: action.payload !== state.categorySelected ? action.payload : null,
            };
        },
    },
});

export const { getCategories, categorySelect } = categoriesSlice.actions;

export default categoriesSlice.reducer;