import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../redux/tweetSlice';
export const store = configureStore({
    reducer: {
        tweet: tweetReducer
    }
})