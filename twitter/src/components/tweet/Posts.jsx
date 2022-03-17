import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Post from '../tweet/Post'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { getHomeTweets, getProfileTweets } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { MobileMax } from '../../responsive';


function Posts({ tweets }) {

    const { isFetching } = useSelector(state => state.tweet)

    return (<>
        {isFetching ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                <CircularProgress color='inherit' size='30px' value={50} />
            </div>
            :
            <Container>
                {tweets &&
                    tweets.map(tweet =>

                        <Post tweet={tweet} key={Math.random()} />

                    )}

            </Container>
        }</>
    )
}

export default Posts
const Container = styled.div`
${MobileMax({
    marginBottom: '50px'
})}
`