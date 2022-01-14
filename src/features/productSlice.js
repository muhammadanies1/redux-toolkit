import axios from 'axios';
import { createSlice, 
        createAsyncThunk,
        createEntityAdapter } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk("/products/getProducts", async() => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
});

const productEntity = createEntityAdapter({
    selectId: (product) => product.id
});

const productSlice = createSlice({
    name: "product",
    initialState: productEntity.getInitialState(),
});

export const { update } = productSlice.actions;
export default productSlice.reducer;