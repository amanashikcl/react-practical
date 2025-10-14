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
            state.products = [{id:1,id:2}];
        }
    }
});

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;