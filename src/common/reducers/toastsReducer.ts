import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface IToast {
    id: string
    message: string
    type?: "success" | "warning" | "error" | "info"
}

interface State {
    toasts: IToast[]
}

const initialState: State = {
    toasts: []
};

const toastsSlice = createSlice({
    name: "toasts",
    initialState,
    reducers: {
        addToast: {
            reducer(state, action: PayloadAction<IToast>) {
                state.toasts.push(action.payload);
            },
            prepare(args: Omit<IToast, "id"> | string) {
                const id = uuid();

                if (typeof args === "string") return { payload: { id, message: args } };

                return { payload: { id, ...args } };
            }
        },
        removeToast(state, action: PayloadAction<string>) {
            state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
        }
    }
});

export const { addToast, removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
