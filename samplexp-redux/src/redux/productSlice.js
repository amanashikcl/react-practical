import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'productstore',
    initialState:{
        products:[],
        loading:false,
        error:null,
    },

    reducers:{
        getProducts:(state, action) =>{
            state.products = action.payload;
        }
    }
});

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;