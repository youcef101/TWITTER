import { axiosInstance } from '../axios';
import {
    addTweetStart,
    addTweetFailure,
    addTweetSuccess,
    getAllTweetsFailure,
    getAllTweetsStart,
    getAllTweetsSuccess,
    getProfileTweetsFailure,
    getProfileTweetsStart,
    getProfileTweetsSuccess,
    getHomeTweetsFailure,
    getHomeTweetsStart,
    getHomeTweetsSuccess,
    deleteTweetFailure,
    deleteTweetStart,
    deleteTweetSuccess,
    updateTweetFailure,
    updateTweetStart,
    updateTweetSuccess
} from './tweetSlice'
import {
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
} from './commentSlice'
import {
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
} from './userSlice'

//add tweet
export const addTweet = async (tweet, dispatch) => {
    dispatch(addTweetStart());
    try {
        const res = await axiosInstance.post('/tweet/add', tweet);
        const data = await res.data
        dispatch(addTweetSuccess(data))
    } catch (err) {
        dispatch(addTweetFailure())
    }
}

//edit tweet 
export const editTweet = async (id, tweet, dispatch) => {
    dispatch(updateTweetStart());
    try {
        const res = await axiosInstance.put(`/tweet/${id}/edit`, tweet);
        const data = await res.data
        dispatch(updateTweetSuccess(data))
    } catch (err) {
        dispatch(updateTweetFailure())
    }
}

//delete tweet
export const deleteTweet = async (id, dispatch) => {
    dispatch(deleteTweetStart());
    try {
        await axiosInstance.delete(`/tweet/${id}/delete`);
        dispatch(deleteTweetSuccess())
    } catch (err) {
        dispatch(deleteTweetFailure())
    }
}

//get all tweets
export const getAllTweets = async (dispatch) => {
    dispatch(getAllTweetsStart());
    try {
        const res = await axiosInstance.get(`/tweet/all/get`);
        const data = await res.data
        dispatch(getAllTweetsSuccess(data))
    } catch (err) {
        dispatch(getAllTweetsFailure())
    }
}

//get profile tweets

export const getProfileTweets = async (id, dispatch) => {
    dispatch(getProfileTweetsStart());
    try {
        const res = await axiosInstance.get(`/tweet/${id}/get/timeline`);
        const data = await res.data
        dispatch(getProfileTweetsSuccess(data))
    } catch (err) {
        dispatch(getProfileTweetsFailure())
    }
}

//get home tweets
export const getHomeTweets = async (id, dispatch) => {
    dispatch(getHomeTweetsStart());
    try {
        const res = await axiosInstance.get(`/tweet/${id}/all`);
        const data = await res.data
        dispatch(getHomeTweetsSuccess(data))
    } catch (err) {
        dispatch(getHomeTweetsFailure())
    }
}
//add comment
export const addComment = async (comment, dispatch) => {
    dispatch(addCommentStart());
    try {
        const res = await axiosInstance.post('/comment/add', comment);
        const data = await res.data
        dispatch(addCommentSuccess(data))
    } catch (err) {
        dispatch(addCommentFailure())
    }
}

//edit comment
export const editComment = async (id, comment, dispatch) => {
    dispatch(editCommentStart());
    try {
        const res = await axiosInstance.put(`/comment/${id}/edit`, comment);
        const data = await res.data
        dispatch(editCommentSuccess(data))
    } catch (err) {
        dispatch(editCommentFailure())
    }
}

//delete comment
export const deleteComment = async (id, dispatch) => {
    dispatch(deleteCommentStart());
    try {
        await axiosInstance.delete(`/comment/${id}/delete`);
        dispatch(deleteCommentSuccess())
    } catch (err) {
        dispatch(deleteCommentFailure())
    }
}

//get all comments
export const getAllComments = async (dispatch) => {
    dispatch(getAllCommentsStart());
    try {
        const res = await axiosInstance.get(`/comment/all/get`);
        const data = await res.data
        dispatch(getAllCommentsSuccess(data))
    } catch (err) {
        dispatch(getAllCommentsFailure())
    }
}

//get all tweet comments
export const getTweetComments = async (id, dispatch) => {
    dispatch(getTweetCommentsStart());
    try {
        const res = await axiosInstance.get(`/comment/${id}/all`);
        const data = await res.data
        dispatch(getTweetCommentsSuccess(data))
    } catch (err) {
        dispatch(getTweetCommentsFailure())
    }
}
