import { createSlice } from "@reduxjs/toolkit";
 const initialState ={
    cartitems : JSON.parse(localStorage.getItem("cartitems")) || [],
    loading :  false,
    error : null,
 }
 const cartSlice =createSlice({
    name:'cartslice',
    initialState,
    reducers:{
        addTocart:(state, action)=>{
         const itemIndex =state.cartitems.findIndex((item) => item.id === action.payload.id);
         if(itemIndex !== -1){
            state.cartitems[itemIndex].quantity ++;
         }else{
            state.cartitems.push({...action.payload, quantity: 1});
        }
        localStorage.setItem("cartitems" , JSON.stringify(state.cartitems));
         } ,
         decrementQuantity: (state, action) => {
             const itemIndex =state.cartitems.findIndex((item) => item.id === action.payload.id);
         if(itemIndex !== -1){
            state.cartitems[itemIndex].quantity --;
                localStorage.setItem("cartitems" , JSON.stringify(state.cartitems));
         }

         } ,
         removeCartItem : (state , action) => {
            state.cartitems.splice(action.payload , 1);
            localStorage.setItem("cartitems" , JSON.stringify(state.cartitems));
         }
    }
 });
 export const {addTocart , decrementQuantity , removeCartItem} = cartSlice.actions;
    export default cartSlice.reducer;