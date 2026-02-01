import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trucksReducer from './trucksSlice';

const rootReducer = combineReducers({
    trucks: trucksReducer
})

export const store = configureStore({
    reducer: rootReducer
})