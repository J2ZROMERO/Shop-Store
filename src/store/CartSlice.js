import { createSlice } from '@reduxjs/toolkit';



const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {  
        addToCard(state,action){
            state.push(action.payload)
        },
        removeFromCart(state,action){
            return state.filter((item) => item.id !== action.payload)
        }
    }
});

export const { addToCard, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
// cartSlice.reducer is the reducer function that we will use in the store configuration.