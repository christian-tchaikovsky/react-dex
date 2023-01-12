import { combineReducers } from "@reduxjs/toolkit";
import notificationReducer from "@/common/reducers/notificationReducer";
import teamsReducer from "@/modules/teams/reducers/teamsReducer";

export const rootReducer = combineReducers({
    notification: notificationReducer,
    teams: teamsReducer
});
