import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //action
        //func to add items to cart

        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //remove items from cart
        removeFromCart:(state,action)=>{
           return state.filter((item)=>item.id!=action.payload)
        },

        //remove all items from array

        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const {addToCart , removeFromCart , emptyCart} = cartSlice.actions
export default cartSlice.reducer; 