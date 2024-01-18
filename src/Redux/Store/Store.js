import { configureStore } from "@reduxjs/toolkit";
import loginAuthSlice from '../Features/loginAuthSlice';
import countrySlice from '../Features/countrySlice';
import regionReducer from '../Features/regionSlice';

export const store = configureStore({
    reducer:{
        loginAuth: loginAuthSlice,
        countryAPI: countrySlice,
        targetRegion: regionReducer
    }
})

export default store;