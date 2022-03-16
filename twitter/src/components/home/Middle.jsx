import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Posts from '../tweet/Posts'
import AccountSuggestions from '../suggestion/AccountSuggestions'
import AddTweet from '../tweet/AddTweet'
import NavBar from './NavBar'
import { getHomeTweets } from '../../redux/apiCalls'




function Middle() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.current_user);
    const tweets = useSelector(state => state.tweet.tweets);


    useEffect(() => {
        getHomeTweets(user?._id, dispatch)
    }, [user?._id, dispatch])


    return (
        <Container>
            <NavBar />
            <AddTweet />
            <AccountSuggestions />
            {tweets && < Posts tweets={tweets} />}
        </Container>
    )
}

export default Middle
const Container = styled.div`
//flex:2;
overflow-x:hidden;
width:40%;

`