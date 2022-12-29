import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface INotification {
    id: string
    message: string
    type?: "success" | "warning" | "error" | "info"
}

interface State {
    notifications: INotification[]
}

const initialState: State = {
    notifications: []
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: {
            reducer(state, action: PayloadAction<INotification>) {
                state.notifications.push(action.payload);
            },
            prepare(args: Omit<INotification, "id"> | string) {
                const id = uuid();

                if (typeof args === "string") return { payload: { id, message: args } };

                return { payload: { id, ...args } };
            }
        },
        removeNotification(state, action: PayloadAction<string>) {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
        }
    }
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
