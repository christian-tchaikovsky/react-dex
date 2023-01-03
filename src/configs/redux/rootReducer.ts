import { combineReducers } from "@reduxjs/toolkit";
import notificationReducer from "@/common/reducers/notificationReducer";

export const rootReducer = combineReducers({
    notification: notificationReducer
});
