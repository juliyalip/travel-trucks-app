import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trucksReducer from './trucksSlice';
import truckDetailsReducer from './truckDetailSlice';

const rootReducer = combineReducers({
    trucks: trucksReducer,
    truckDetails: truckDetailsReducer
})

export const store = configureStore({
    reducer: rootReducer
})