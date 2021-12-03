import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";

export const getProfileData = createAsyncThunk(
    "person/Data",
    async (data) => {
        return await API.getPersonData(data);
    }
)

export const getHoursPerMonth = createAsyncThunk(
    "person/Hours",
    async(data) => {
        return await API.getHoursPerMonth(data)
    }
)
export const authSlice = createSlice({
    name: "person",
    initialState: {
        verifyLoading: false,
        status:0,
        networkStatus: false,
        errorTitle:"",
        errorMessage:"",
        personStatus: true,
        personData:{
            uid:"",
            name:'',
            
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
        },
    },
    extraReducers: {
        [getProfileData.fulfilled]: (state, action) => {
            //изменение экрана загрузки для проверки статуса пользователя(уволен)
            state.verifyLoading = false;
            state.loading = false;
            if(action.payload.status === false){
                state.errorMessage = action.payload.message;
                state.errorTitle = action.payload.title;
                state.personStatus = false;
            }else if(action.payload.person_data.employeeName){
                state.personData.uid= action.meta.arg.uid;
                state.personData = action.payload.person_data;
                state.legend = action.payload.legend;
                state.status = true;
            }else  {
                state.errorMessage = action.payload.message;
            }
          },
          [getProfileData.pending]: (state, action) => {
            state.loading = true;
            state.verifyLoading = true;
          },
        [getHoursPerMonth.fulfilled]: (state,action) => {
            state.loading = false;
            state.personData.totalTime = action.payload.totalTime;
            state.personData.status = action.payload.status;
        },
        [getHoursPerMonth.pending]: (state,action) => {
            state.loading = true;
        }
        
    }
})

export const {Authorization, Hydrate,ChangeNetworkStatus} = authSlice.actions;
export default authSlice.reducer;  