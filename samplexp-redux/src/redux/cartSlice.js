import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") )|| [],
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cartItems.findIndex((item) => item.id===action.payload.id);

            if(itemIndex!== -1){
                state.cartItems[itemIndex].quantity++;
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const {addToCart}  = cartSlice.actions;
export default cartSlice.reducer;