import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducer";
import HistoryReducer from "./HistoryReducer";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        history: HistoryReducer
    },
  });