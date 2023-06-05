import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart/cartSlice";
import productSlice from "./feature/products/productSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
})