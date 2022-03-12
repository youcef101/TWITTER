import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    all_tweets: [],//all tweets
    tweets: [],// tweets for home page
    timeline_tweets: [],//current_user tweets into profile page
    tweet: null,//current_tweet
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
            //state.tweet = action.payload
            state.tweets.unshift(action.payload)
        },
        addTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getAllTweetsStart: (state) => {
            state.error = false;
            state.isFetching = true;

        },
        getAllTweetsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.all_tweets = action.payload;
        },
        getAllTweetsFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        getHomeTweetsStart: (state) => {
            state.error = false;
            state.isFetching = true;

        },
        getHomeTweetsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.tweets = action.payload;
        },
        getHomeTweetsFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },

        getProfileTweetsStart: (state) => {
            state.error = false;
            state.isFetching = true;

        },
        getProfileTweetsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.timeline_tweets = action.payload;
        },
        getProfileTweetsFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        getCurrentTweetStart: (state) => {
            state.error = false;
            state.isFetching = true;

        },
        getCurrentTweetSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.tweet = action.payload;
        },
        getCurrentTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        deleteTweetStart: (state) => {
            state.error = false;
            state.isFetching = true;
        },
        deleteTweetSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.timeline_tweets.filter(tweet => tweet._id !== action.payload.id)
        },
        deleteTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        updateTweetStart: (state) => {
            state.error = false;
            state.isFetching = true;
        },
        updateTweetSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.timeline_tweets[
                state.timeline_tweets.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.tweet;
        },
        updateTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        likedTweetStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        likedTweetSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.tweets[
                state.tweets.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.user;

        },
        likedTweetFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
    }
});
export const {
    addTweetStart,
    addTweetFailure,
    addTweetSuccess,
    getAllTweetsFailure,
    getAllTweetsStart,
    getAllTweetsSuccess,
    getProfileTweetsFailure,
    getProfileTweetsStart,
    getProfileTweetsSuccess,
    getCurrentTweetFailure,
    getCurrentTweetStart,
    getCurrentTweetSuccess,
    getHomeTweetsFailure,
    getHomeTweetsStart,
    getHomeTweetsSuccess,
    likedTweetFailure,
    likedTweetStart,
    likedTweetSuccess,
    deleteTweetFailure,
    deleteTweetStart,
    deleteTweetSuccess,
    updateTweetFailure,
    updateTweetStart,
    updateTweetSuccess
} = tweetSlice.actions
export default tweetSlice.reducer