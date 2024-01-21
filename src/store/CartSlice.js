import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        additem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => state.filter(item => item.id !== action.payload)

    }
})

export const { additem } = CartSlice.actions
export default CartSlice.reducer