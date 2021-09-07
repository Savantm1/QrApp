import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";

export default configureStore({
    reducer: {
        auth: AuthReducer
    },
  });