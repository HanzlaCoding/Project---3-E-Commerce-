import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProductData: (state, action) => {
      console.log(state, action);
      state.productData = action.payload;
    },
  },
});

export const { loadProductData } = productSlice.actions;
export default productSlice.reducer;
