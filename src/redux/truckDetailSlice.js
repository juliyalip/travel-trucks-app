import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckById } from "./trucksOperations";

const slice = createSlice({
    name: "truckDetails",
    initialState: {
        item: null,
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchTruckById.pending, (state) => {
            state.isLoading = true;
            state.error = null
        }).addCase(fetchTruckById.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.item = payload
        }).addCase(fetchTruckById.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        })
    }
});

export default slice.reducer