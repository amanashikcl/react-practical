import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"

const store  = configureStore({
    reducer:{
        product:productReducer,
        cartItems: cartReducer,
    }   
});

export default store;