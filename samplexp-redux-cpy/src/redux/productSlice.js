import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'productslice',
    initialState: {
        products: JSON.parse(localStorage.getItem("products")) || [],
        loading: false,
        error: null,


    },
    reducers: {
        geetproducts: (state, action) => {
            state.products = action.payload;
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        addProducts: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state.products))
        },

    }

});
export const { geetproducts, addProducts } = productSlice.actions;
export default productSlice.reducer;