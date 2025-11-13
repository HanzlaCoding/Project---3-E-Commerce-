import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      }
      state.totalQuantity += newItem.quantity || 1;
      state.totalPrice += newItem.price * (newItem.quantity || 1);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        const priceDifference = existingItem.price * (quantity - existingItem.quantity);
        state.totalPrice += priceDifference;
        state.totalQuantity += quantity - existingItem.quantity;
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;