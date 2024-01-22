import { createSlice } from "@reduxjs/toolkit";
import { Placeholder } from "react-bootstrap";

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        additem: (state, action) => {

            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
        }

        ,
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            return state.filter(item => item.title !== itemIdToRemove);
        }




    }
})

export const { additem, removeItem } = CartSlice.actions
export default CartSlice.reducer