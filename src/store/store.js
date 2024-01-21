import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import CartSlice from './CartSlice'
let store = configureStore({
    reducer: {
        Product: ProductSlice,
        Carts: CartSlice
    }
})
export default store