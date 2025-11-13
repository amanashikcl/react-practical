import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "./productSlice";
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    product : productReducer ,
    cartitems : cartReducer ,
  users : userReducer
  }
})
export default store;
