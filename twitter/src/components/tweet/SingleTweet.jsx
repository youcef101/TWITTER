import React from 'react'
import styled from 'styled-components'
import TweetNav from './TweetNav'
import TweetPost from './TweetPost'

function SingleTweet() {
    return (
        <Container>
            <TweetNav />
            <TweetPost />
        </Container>
    )
}

export default SingleTweet
const Container = styled.div`
flex:2;
`