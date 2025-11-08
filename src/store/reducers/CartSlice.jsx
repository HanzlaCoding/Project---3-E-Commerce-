import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartData: (state, action) => {
      console.log(state, action);
      state.cartData = action.payload;
    },
  },
});

export const { loadCartData } = cartSlice.actions;
export default cartSlice.reducer;
