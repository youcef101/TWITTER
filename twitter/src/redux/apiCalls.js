import { axiosInstance } from '../axios';
import {
    addTweetFailure,
    addTweetStart,
    addTweetSuccess
} from './tweetSlice'

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