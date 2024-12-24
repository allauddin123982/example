import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featrues/cart/cartSlice";

export const store = () => {
  return configureStore({
    reducer: { cart: cartReducer }, 
  });
};
