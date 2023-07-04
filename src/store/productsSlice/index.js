import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getProducts = createAsyncThunk('productsSlice/getProducts', async (_, { dispatch }) => {
    const response = await axios.get('https://qrmenu.dbc-server.uz/api/products', {
        headers: {
            'Accept-Language': 'ru'
        }
    })
    dispatch(setProducts(response.data.data))
})



export const getCategory = createAsyncThunk('productsSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://qrmenu.dbc-server.uz/api/categories', {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `${localStorage.getItem('lang')}`
        }
    })
    dispatch(setCategory(response.data.data))
})



export const checkAuth = createAsyncThunk('productsSlice/checkAuth', async (_, { rejectWithValue, dispatch }) => {

    const response = await axios.post(`https://qrmenu.dbc-server.uz/api/verify?uuid=${localStorage.getItem('client')}`, {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `${localStorage.getItem('lang')}`
        },
        params: {
            'uuid': localStorage.getItem('client')
        }
    })
    if (response.status === 200) {
        dispatch(setIsAuth(response.data.status))
    }

    console.log(response);
    if (response.status === 404) {
        dispatch(setIsAuth(error.response.data.status))
    }

})







const initialState = {
    category: [],
    products: [],
    product: [],
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : localStorage.setItem('lang', 'qr'),
    isAuth: ''
}


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setProduct: (state, { payload }) => {
            state.product = payload
        },
        setIsAuth: (state, { payload }) => {
            localStorage.setItem('client', payload)
            state.isAuth = localStorage.getItem('client')
        },
        setLangg: (state, { payload }) => {
            localStorage.setItem('lang', payload)
            state.lang = localStorage.getItem('lang')
        }
    }
})

export default productsSlice.reducer
export const { setCategory, setProduct, setProducts, setIsAuth, setLangg } = productsSlice.actions