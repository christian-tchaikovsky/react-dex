import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRequest, IResponse } from "../interfaces/IPlayers";
import { getPlayers } from "@/api/players";

interface State {
    players: IResponse | null
    loading: boolean
    error: boolean
}

export const fetchPlayers = createAsyncThunk<IResponse, IRequest, {}>(
    "players/fetchPlayers",
    async (args, { signal }) => {
        const response = await getPlayers(args, {
            signal
        });
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
                state.loading = false;
            })
            .addCase(fetchPlayers.rejected, (state, { error }) => {
                if (error.message === "Aborted") return;

                state.error = true;
                state.loading = false;
            });
    }
});

export default playersSlice.reducer;
