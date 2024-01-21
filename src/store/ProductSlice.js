import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    selectedColor: '',
    selectedCategory: '',
    selectedCompany: '',
};

const productSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSelectedCompany: (state, action) => {
            state.selectedCompany = action.payload;
        },
    },
});

export const { setSearch, setSelectedColor, setSelectedCategory, setSelectedCompany } = productSlice.actions;
export default productSlice.reducer;
