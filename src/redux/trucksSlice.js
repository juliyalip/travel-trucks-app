import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./trucksOperations";
import { applyFilters } from "../helpers/applyFilters";

const slice = createSlice({
    name: "trucks",
    initialState: {
        items: [],
        total: 0,
        results: [],
        visibleCount: 4,
        isLoading: false,
        error: null,
    },
    reducers: {
        resetResults(state) {
            state.results = [];
            state.visibleCount = 4;

        }, runSearch(state, { payload }) {
            const filters = payload;
            state.results = filters ? applyFilters(state.items, filters) : state.items;
            state.visibleCount = 4
        },
        loadMore(state) {
            state.visibleCount += 4
        }
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
                state.items = payload.items;
                state.total = payload.total;
                state.results = payload.items;
                state.visibleCount = 4
            })
            .addCase(fetchTrucks.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export default slice.reducer;
export const { resetResults, runSearch, loadMore } = slice.actions;
