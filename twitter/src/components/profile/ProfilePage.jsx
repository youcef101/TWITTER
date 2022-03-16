import React from 'react'
import styled from 'styled-components'
import ProfileInfos from '../profile/ProfileInfos'
import ProfileNav from '../profile/ProfileNav'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProfileTweets } from '../../redux/apiCalls'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Posts from '../tweet/Posts'
import { CircularProgress } from '@material-ui/core'




function ProfilePage() {
    const dispatch = useDispatch()
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const timeline_tweets = useSelector(state => state.tweet.timeline_tweets);
    const { isFetching } = useSelector(state => state.tweet)

    useEffect(() => {
        userId && getProfileTweets(userId, dispatch)
    }, [userId, dispatch])

    return (<>
        <Container>
            <ProfileNav />
            <ProfileInfos
                userId={userId}


            />
            {isFetching ?
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                    <CircularProgress color='inherit' size='30px' value={50} />
                </div>
                : <>

                    {timeline_tweets && <Posts tweets={timeline_tweets} />}  </>}
        </Container>

    </>)
}

export default ProfilePage
const Container = styled.div`
flex:2;
`