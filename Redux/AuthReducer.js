import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";

export const getProfileData = createAsyncThunk(
    "person/Data",
    async (data) => {
        return await API.getPersonData(data);
    }
)


export const authSlice = createSlice({
    name: "person",
    initialState: {
        uid:"",
        status:0,
        errorMessage:"",
        personData:{
            name:''
        }
    },
    reducers: {

        Hydrate (state,action) {
            console.log("HYDRATE payload:",action)
            state.uid = action.payload.uid;
            state.status = action.payload.status;
        },
        Authorization(state,action) {
            console.log("authorization reducer",action.payload);
            state.uid = action.payload.userId;
            state.status = action.payload.result.status;
            console.log("state after authorization",state)
        }

    },
    extraReducers: {
        [getProfileData.fulfilled]: (state, action) => {
            console.log("extrared",action)
            if(action.payload.employeeName){
                state.uid= action.meta.arg.uid;
                state.personData = action.payload;
                state.status = true;
            }else {
                state.errorMessage = action.payload.message
            }
          },
    }
})

export const {Authorization, Hydrate} = authSlice.actions;
export default authSlice.reducer;  