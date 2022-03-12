import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tweetReducer from '../redux/tweetSlice';
import commentReducer from '../redux/commentSlice';
import userReducer from '../redux/userSlice';
//import { AsyncStorage } from 'AsyncStorage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({ tweet: tweetReducer, comment: commentReducer, user: userReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export let persistor = persistStore(store);

/* export const store = configureStore({
    reducer: {
        user: userReducer,
        tweet: tweetReducer,
        comment: commentReducer
    },
}); */