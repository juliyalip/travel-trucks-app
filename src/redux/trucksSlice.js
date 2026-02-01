import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./trucksOperations";

const slice = createSlice({
    name: "trucks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrucks.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTrucks.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(fetchTrucks.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export default slice.reducer;
