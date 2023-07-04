import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    token: localStorage.getItem('token')
    
}


const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            localStorage.setItem('token', 'payload')
            state.token = localStorage.getItem('token')
        }
    }
})

export default tokenSlice.reducer