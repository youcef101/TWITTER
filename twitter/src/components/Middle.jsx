import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getHomeTweets } from '../redux/apiCalls'
import AccountSuggestions from './AccountSuggestions'
import AddTweet from './AddTweet'
import NavBar from './NavBar'
import Posts from './Posts'



function Middle() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.current_user);
    const tweets = useSelector(state => state.tweet.tweets);
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        getHomeTweets(user?._id, dispatch)
    }, [user?._id, dispatch, isLiked])


    return (
        <Container>
            <NavBar />
            <AddTweet />
            <AccountSuggestions />
            {tweets && < Posts tweets={tweets} setIsLiked={setIsLiked} isLiked={isLiked} />}
        </Container>
    )
}

export default Middle
const Container = styled.div`
//flex:2;
overflow-x:hidden;
width:40%;

`