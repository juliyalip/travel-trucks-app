import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "favorites",
    initialState: {
        ids: []
    },
    reducers: {
        toggleFavorite(state, { payload: id }) {
            const idx = state.ids.indexOf(id);
            if (idx === -1) state.ids.push(id)
            else state.ids.splice(idx, 1)
        }
    }
});

export const { toggleFavorite } = slice.actions;

export default slice.reducer



