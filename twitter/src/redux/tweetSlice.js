import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    tweets: [],
    tweet: null,
    error: false,
    isFetching: false
}
const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addTweetStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        addTweetSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.tweet = action.payload
        },
        addTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false
        }
    }
});
export const {
    addTweetStart,
    addTweetFailure,
    addTweetSuccess
} = tweetSlice.actions
export default tweetSlice.reducer