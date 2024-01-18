import { createSlice } from "@reduxjs/toolkit";

const regionReducer = createSlice({
    name:'region',
    initialState:{
        region:' ',
    },
    reducers:{
        regionAction : (state,action) => {
            state.region = action.payload;
        },
    }
})

export const {regionAction} = regionReducer.actions
export default regionReducer.reducer;