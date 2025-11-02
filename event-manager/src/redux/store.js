import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import wishListReducer from "./wishListSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    wishList: wishListReducer,
  },
});

export default store;
