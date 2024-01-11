import { configureStore } from "@reduxjs/toolkit";
import wishList from "./slices/wishList";
import cartSlice from "./slices/cartSlice";


export const store = configureStore({
    reducer:{
        wishListReducer:wishList,
        cartReducer:cartSlice
    }
})

export default store;