import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";
import UserSlice from "./reducers/UserSlice";
import ProductSlice from "./reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    usersReducer: UserSlice,
    productsReducer: ProductSlice,
    cartReducer: CartSlice,
  },
});
