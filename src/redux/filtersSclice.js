import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: '',
    type: null,
    equipments: [],
}

const slice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setLocation(state, { payload }) {
            state.location = payload
        },
        setType(state, { payload }) {
            state.type = payload
        },
        setEquipments(state, { payload }) {
            state.equipments = payload
        },
        setAllFilters(state, { payload }) {
            Object.assign(state, payload)
        },
        resetFilters() {
            return initialState
        }
    }
});

export const { setLocation, setType, setEquipments, setAllFilters, resetFilters } = slice.actions;

export default slice.reducer