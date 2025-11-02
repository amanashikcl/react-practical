import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: { items: [] },
  reducers: {
    addWish: (state, action) => {
      state.items.push(action.payload);
    },
    removeWish: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addWish, removeWish } = wishListSlice.actions;
export default wishListSlice.reducer;
