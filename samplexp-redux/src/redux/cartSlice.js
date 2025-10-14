import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push(action.payload);
        }
    }
})

export const {addToCart}  = cartSlice.actions;
export default cartSlice.reducer;