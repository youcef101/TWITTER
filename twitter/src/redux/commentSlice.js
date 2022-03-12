import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    comments: [],
    tweet_comments: [],
    comment: null,
    error: false,
    isFetching: false
}
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addCommentStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        addCommentSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            //state.comment = action.payload;
            state.tweet_comments.push(action.payload)
        },
        addCommentFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        editCommentStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        editCommentSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.comments[
                state.comments.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.comment;
        },
        editCommentFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        deleteCommentStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        deleteCommentSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.comments.filter(comment => comment._id !== action.payload.id);
        },
        deleteCommentFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getTweetCommentsStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getTweetCommentsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.tweet_comments = action.payload
        },
        getTweetCommentsFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getAllCommentsStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getAllCommentsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.comments = action.payload
        },
        getAllCommentsFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
    }
})
export const {
    addCommentFailure,
    addCommentStart,
    addCommentSuccess,
    editCommentFailure,
    editCommentStart,
    editCommentSuccess,
    deleteCommentFailure,
    deleteCommentStart,
    deleteCommentSuccess,
    getAllCommentsFailure,
    getAllCommentsStart,
    getAllCommentsSuccess,
    getTweetCommentsFailure,
    getTweetCommentsStart,
    getTweetCommentsSuccess
} = commentSlice.actions
export default commentSlice.reducer