import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logStatus: false,
}

const loginAuthReducer = createSlice({
    name:'loginAuth',
    initialState,
    reducers:{
        loginStatus: (state,action) => {
            state.logStatus = action.payload
        },
    }
})

export default loginAuthReducer.reducer;
export const {loginStatus}  = loginAuthReducer.actions;