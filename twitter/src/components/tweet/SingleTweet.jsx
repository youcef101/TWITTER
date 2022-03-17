import React from 'react'
import styled from 'styled-components'
import FooterNav from '../responsive/FooterNav'
import TweetNav from './TweetNav'
import TweetPost from './TweetPost'

function SingleTweet() {
    return (
        <Container>
            <TweetNav />
            <TweetPost />
            <FooterNav />
        </Container>
    )
}

export default SingleTweet
const Container = styled.div`
flex:2;
`