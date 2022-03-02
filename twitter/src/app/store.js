import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../redux/tweetSlice';
import commentReducer from '../redux/commentSlice';
import userReducer from '../redux/userSlice';
export const store = configureStore({
    reducer: {
        tweet: tweetReducer,
        comment: commentReducer,
        user: userReducer
    }
})