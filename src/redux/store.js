import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trucksReducer from './trucksSlice';
import truckDetailsReducer from './truckDetailSlice';
import filtersReducer from './filtersSclice'

const rootReducer = combineReducers({
    trucks: trucksReducer,
    truckDetails: truckDetailsReducer,
    filters: filtersReducer

})

export const store = configureStore({
    reducer: rootReducer
})