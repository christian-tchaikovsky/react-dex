import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { IRequest, IResponse } from "@/modules/teams/interfaces/ITeams";
import { getTeams } from "@/api/teams";

interface State {
    teams: IResponse | null
    loading: boolean
    error: boolean
}

export const fetchTeams = createAsyncThunk<IResponse, IRequest, {}>(
    "teams/fetchTeams",
    async (params) => {
        const response = await getTeams(params);
        return response.data;
    }
);

const initialState: State = {
    teams: null,
    loading: true,
    error: false
};

const userSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchTeams.fulfilled, (state, { payload }) => {
                state.teams = payload;
            })
            .addCase(fetchTeams.rejected, (state) => {
                state.error = true;
            })
            .addMatcher(
                isAnyOf(fetchTeams.fulfilled, fetchTeams.rejected),
                (state) => {
                    state.loading = false;
                }
            );
    }
});

export default userSlice.reducer;
