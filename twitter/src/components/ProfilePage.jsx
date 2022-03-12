import React from 'react'
import styled from 'styled-components'
import ProfileInfos from './ProfileInfos'
import ProfileNav from './ProfileNav'
import Posts from './Posts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProfileTweets } from '../redux/apiCalls'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { axiosInstance } from '../axios'


function ProfilePage() {
    const dispatch = useDispatch()
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const timeline_tweets = useSelector(state => state.tweet.timeline_tweets);
    const [profileInfos, setProfileInfos] = useState(null)
    /*  const [isFollow, setIsFollow] = useState(false)
     const [isUnfollow, setIsUnfollow] = useState(false) */


    useEffect(() => {
        getProfileTweets(userId, dispatch)
    }, [userId, dispatch])




    return (
        <Container>
            <ProfileNav profileInfos={profileInfos} />
            <ProfileInfos
                userId={userId}
                profileInfos={profileInfos}
                setProfileInfos={setProfileInfos}
            /*   setIsFollow={setIsFollow}
              setIsUnfollow={setIsUnfollow}
              isFollow={isFollow}
              isUnfollow={isUnfollow} */
            />
            {timeline_tweets && <Posts tweets={timeline_tweets} />}
        </Container>
    )
}

export default ProfilePage
const Container = styled.div`
flex:2;
`