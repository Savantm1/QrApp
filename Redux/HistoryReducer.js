import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../API";

export const getHistory = createAsyncThunk(
    "history/Data",
    async (data) => {
        return await API.getHistoryData(data);
    }
)
export const getDayHistory = createAsyncThunk(
    "history/DayData",
    async (data) => {
        return await API.getHistoryDayData(data);
    }
)

export const historySlice = createSlice({
    name: "history",
    initialState: {
        historyData: [] ,
        historyDayData:[]        
    },

    extraReducers: {
        [getHistory.fulfilled]: (state,action) => {

           state.historyData = action.payload.final_array;
           state.totalTime = action.payload.total_time_convert ;
        },
        [getDayHistory.fulfilled]: (state,action) => {

           state.historyDayData = action.payload.final_array;
           state.totalDayTime = action.payload.total_time ;
           state.dayString = action.payload.date_format;
        }
    }
});

export default historySlice.reducer;  