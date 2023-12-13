import { createSlice, createAsyncThunk } 
    from '@reduxjs/toolkit'

import { API } from '../products/config'

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return fetch(API)
        .then(res => res.json())
        .then(products => products)
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        products: [],
        error: ''
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer