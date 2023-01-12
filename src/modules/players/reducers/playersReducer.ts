import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { IRequest, IResponse } from "../interfaces/IPlayers";
import { getPlayers } from "@/api/players";

interface State {
    players: IResponse | null
    loading: boolean
    error: boolean
}

export const fetchPlayers = createAsyncThunk<IResponse, IRequest, {}>(
    "players/fetchPlayers",
    async (params) => {
        const response = await getPlayers(params);
        return response.data;
    }
);

const initialState: State = {
    players: null,
    loading: true,
    error: false
};

const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPlayers.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchPlayers.fulfilled, (state, { payload }) => {
                state.players = payload;
            })
            .addCase(fetchPlayers.rejected, (state) => {
                state.error = true;
            })
            .addMatcher(
                isAnyOf(fetchPlayers.fulfilled, fetchPlayers.rejected),
                (state) => {
                    state.loading = false;
                }
            );
    }
});

export default playersSlice.reducer;
