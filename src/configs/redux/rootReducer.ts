import { combineReducers } from "@reduxjs/toolkit";
import playersReducer from "@/modules/players/reducers/playersReducer";
import toastsReducer from "@/common/reducers/toastsReducer";
import teamsReducer from "@/modules/teams/reducers/teamsReducer";

export const rootReducer = combineReducers({
    players: playersReducer,
    toasts: toastsReducer,
    teams: teamsReducer
});
