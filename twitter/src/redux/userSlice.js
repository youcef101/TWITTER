import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    users: [],
    followings: [],
    followers: [],
    suggestions: [],
    current_user: null,
    error: false,
    isFetching: false
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.current_user = action.payload
        },
        loginFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        logoutStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        logoutSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.current_user = null
        },
        logoutFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        editUserStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        editUserSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.user;
        },
        editUserFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        deleteUserStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        deleteUserSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.users.filter(user => user._id !== action.payload.id);
        },
        deleteUserFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getAllUsersStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getAllUsersSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.users = action.payload
        },
        getAllUsersFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getUserFollowingsStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getUserFollowingsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.followings = action.payload
        },
        getUserFollowingsFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getUserFollowersStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getUserFollowersSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.followers = action.payload
        },
        getUserFollowersFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
        getUserSuggestionsStart: (state) => {
            state.error = false;
            state.isFetching = true
        },
        getUserSuggestionsSuccess: (state, action) => {
            state.error = false;
            state.isFetching = false;
            state.suggestions = action.payload
        },
        getUserSuggestionsFailure: (state) => {
            state.error = true;
            state.isFetching = false
        },
    }
})
export const {
    loginFailure,
    loginStart,
    loginSuccess,
    logoutFailure,
    logoutStart,
    logoutSuccess,
    loginFailure,
    editUserFailure,
    editUserStart,
    editUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    getUserFollowersFailure,
    getUserFollowersStart,
    getUserFollowersSuccess,
    getUserFollowingsFailure,
    getUserFollowingsStart,
    getUserFollowingsSuccess,
    getUserSuggestionsFailure,
    getUserSuggestionsStart,
    getUserSuggestionsSuccess,
    getAllUsersFailure,
    getAllUsersStart,
    getAllUsersSuccess
} = userSlice.actions
export default userSlice.reducer