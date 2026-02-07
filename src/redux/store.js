import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore, persistReducer
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import trucksReducer from './trucksSlice';
import truckDetailsReducer from './truckDetailSlice';
import filtersReducer from './filtersSclice'
import favoriteReducer from './favoritesSlice'


const rootReducer = combineReducers({
    trucks: trucksReducer,
    truckDetails: truckDetailsReducer,
    filters: filtersReducer,
    favorites: favoriteReducer

})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favorites"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})

export const persistor = persistStore(store)