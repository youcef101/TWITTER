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
    updateTweetSuccess,
    getCurrentTweetFailure,
    getCurrentTweetStart,
    getCurrentTweetSuccess,
    likedTweetFailure,
    likedTweetStart,
    likedTweetSuccess,
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
    getAllUsersSuccess,
    editUserPhotoFailure,
    editUserPhotoStart,
    editUserPhotoSuccess,
    editUserCoverFailure,
    editUserCoverStart,
    editUserCoverSuccess,
    getCurrentUserFailure,
    getCurrentUserStart,
    getCurrentUserSuccess
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

//get current Tweet
export const getCurrentTweet = async (id, dispatch) => {
    dispatch(getCurrentTweetStart());
    try {
        const res = await axiosInstance.get(`/tweet/${id}/get`);
        const data = await res.data
        dispatch(getCurrentTweetSuccess(data))
    } catch (err) {
        dispatch(getCurrentTweetFailure())
    }
}

//liked tweet
export const likedTweet = async (id, user, dispatch) => {
    dispatch(likedTweetStart());
    try {
        const res = await axiosInstance.put(`/tweet/${id}/like`, user);
        const data = await res.data
        dispatch(likedTweetSuccess(data));
    } catch (err) {
        dispatch(likedTweetFailure())
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

//login
export const LoginCalls = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post('/auth/login', user);
        const data = await res.data;
        dispatch(loginSuccess(data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

//logout
export const LogoutCalls = async (dispatch) => {
    dispatch(loginStart())
    try {
        dispatch(loginSuccess())
    } catch (err) {
        dispatch(loginFailure())
    }
}

//edit user infos
export const EditUser = async (id, user, dispatch) => {
    dispatch(editUserStart())
    try {
        const res = await axiosInstance.put(`/user/${id}/edit`, user);
        const data = await res.data;
        dispatch(editUserSuccess(data))
    } catch (err) {
        dispatch(editUserFailure())
    }
}

//edit user profile photo
export const EditUserProfilePhoto = async (id, user, dispatch) => {
    dispatch(editUserPhotoStart())
    try {
        const res = await axiosInstance.put(`/user/${id}/edit/profile/photo`, user);
        const data = await res.data;
        dispatch(editUserPhotoSuccess(data))
    } catch (err) {
        dispatch(editUserPhotoFailure())
    }
}

//edit user profile cover
export const EditUserProfileCover = async (id, user, dispatch) => {
    dispatch(editUserCoverStart())
    try {
        const res = await axiosInstance.put(`/user/${id}/edit/profile/cover`, user);
        const data = await res.data;
        dispatch(editUserCoverSuccess(data))
    } catch (err) {
        dispatch(editUserCoverFailure())
    }
}

//edit user suggestions
export const getUserSuggestions = async (id, dispatch) => {
    dispatch(getUserSuggestionsStart())
    try {

        const res = await axiosInstance.get(`/user/${id}/notFollow`);
        const data = await res.data;
        dispatch(getUserSuggestionsSuccess(data))
    } catch (err) {
        dispatch(getUserSuggestionsFailure())
    }
}

//get Current User
export const getCurrentUser = async (id, dispatch) => {
    dispatch(getCurrentUserStart());
    try {
        const res = await axiosInstance.get(`/user/${id}/get`);
        const data = await res.data;
        dispatch(getCurrentUserSuccess(data))
    } catch (err) {
        dispatch(getCurrentUserFailure())
    }
}

//get all users
export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersStart());
    try {
        const res = await axiosInstance.get('/user/get/all');
        const data = await res.data;
        dispatch(getAllUsersSuccess(data));
    } catch (err) {
        dispatch(getAllUsersFailure())
    }
}

//get user followers
export const getUserFollowers = async (id, dispatch) => {
    dispatch(getUserFollowersStart());
    try {
        const res = await axiosInstance.get(`/user/${id}/followers`);
        const data = await res.data;
        dispatch(getUserFollowersSuccess(data));
    } catch (err) {
        dispatch(getUserFollowersFailure())
    }
}
//get user followings
export const getUserFollowings = async (id, dispatch) => {
    dispatch(getUserFollowingsStart());
    try {
        const res = await axiosInstance.get(`/user/${id}/followings`);
        const data = await res.data;
        dispatch(getUserFollowingsSuccess(data));
    } catch (err) {
        dispatch(getUserFollowingsFailure())
    }
}