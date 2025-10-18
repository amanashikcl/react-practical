import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'productstore',
    initialState:{
        products:JSON.parse(localStorage.getItem("products")) || [],
        loading:false,
        error:null,
    },

    reducers:{
        getProducts:(state, action) =>{
            state.products = action.payload;
            localStorage.setItem('products', JSON.stringify(state.products));
        }
    }
});

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;