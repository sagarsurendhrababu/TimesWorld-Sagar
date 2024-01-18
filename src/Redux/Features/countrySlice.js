import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    countryData: [],
    error:'',
    loading:false
}

const getData = createAsyncThunk('api/data', () => {
    return axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
    .then((response) => {        
        return response.data;
    });
});

const countrySlice = createSlice({
    name:'countryApi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.loading  = false;
                state.countryData = action.payload;
            })
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.rejected, (state) => {
                state.loading = false;
                state.error = 'not able to fetch data now';
            });
    }
});

export {getData}
export default countrySlice.reducer;
