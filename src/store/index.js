import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import tokenSlice from './tokenSlice'
export const store = configureStore({
    reducer: {
        tokenSlice,
        productsSlice
    }
})