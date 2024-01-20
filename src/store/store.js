import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
let store = configureStore({
    reducer: {
        Product: ProductSlice
    }
})
export default store