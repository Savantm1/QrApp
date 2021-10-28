import { createSlice } from "@reduxjs/toolkit";


export const qrSlice = createSlice({
    name: "qrscreen",
    initialState: {    
        loading:false,
    },
    reducers: {
        ChangeLoading( state,action) {
            state.loading = action.payload;
        },
        
    }
})

export const {ChangeLoading} = qrSlice.actions;
export default qrSlice.reducer; 