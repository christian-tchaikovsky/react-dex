import { combineReducers } from "@reduxjs/toolkit";
import notificationReducer from "@/common/reducers/notificationReducer";
import teamsReducer from "@/modules/teams/reducers/teamsReducer";
import playersReducer from "@/modules/players/reducers/playersReducer";

export const rootReducer = combineReducers({
    notification: notificationReducer,
    players: playersReducer,
    teams: teamsReducer
});
