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
        status:0,
        networkStatus:false,
        errorMessage:"",
        personData:{
            uid:"",
            name:''
        }
    },
    reducers: {

        Hydrate (state,action) {
            state.personData = action.payload.personData;
            state.status = action.payload.status;
        },
        Authorization(state,action) {

            state.personData.uid = action.payload.userId;
            state.status = action.payload.result.status;

        },
        ChangeNetworkStatus(state,action) {

            state.networkStatus = action.payload;
        }

    },
    extraReducers: {
        [getProfileData.fulfilled]: (state, action) => {

            if(action.payload.person_data.employeeName){
                state.personData.uid= action.meta.arg.uid;
                state.personData = action.payload.person_data;
                state.legend = action.payload.legend;
                state.status = true;
            }else {
                state.errorMessage = action.payload.message;
            }
          },
    }
})

export const {Authorization, Hydrate,ChangeNetworkStatus} = authSlice.actions;
export default authSlice.reducer;  