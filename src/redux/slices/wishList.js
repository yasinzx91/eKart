import { createSlice } from "@reduxjs/toolkit";


const wishList = createSlice({
    name:'wish-list',
    initialState:[],
    reducers:{
        //action
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist} = wishList.actions

export default wishList.reducer

