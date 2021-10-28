import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducer";
import HistoryReducer from "./HistoryReducer";
import QRScreenReducer from "./QRScreenReducer";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        history: HistoryReducer,
        qrscreen: QRScreenReducer
    },
  });