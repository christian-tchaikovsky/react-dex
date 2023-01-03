import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { IRequest, IResponse } from "@/modules/teams/interfaces/ITeams";
import { getTeams } from "@/api/teams";

interface State {
    teams: IResponse | null
    loading: boolean
    name: string | null
    page: number
    size: number
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
    name: null,
    page: 1,
    size: 6
};

const userSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page -= 1;
        },
        changeSize: (state, payload: PayloadAction<number>) => {
            state.size = payload.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTeams.pending, (state, _) => {
                state.loading = true;
            })
            .addCase(fetchTeams.fulfilled, (state, { payload }) => {
                state.teams = payload;
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
