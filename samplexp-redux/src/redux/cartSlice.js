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
        },
        decremenntQuantity:(state,action) =>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex !== -1){
                state.cartItems[itemIndex].quantity--;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
        },

        removeCartItem:(state,action)=>{
            state.cartItems.splice(action.payload, 1);
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        }
    }
})

export const {addToCart, decremenntQuantity, removeCartItem}  = cartSlice.actions;
export default cartSlice.reducer;