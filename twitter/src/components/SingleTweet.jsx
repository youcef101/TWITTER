import React from 'react'
import styled from 'styled-components'
import TweetNav from './TweetNav'
import TweetPost from './TweetPost'

function SingleTweet({ setCommentModal, commentModal }) {
    return (
        <Container>
            <TweetNav />
            <TweetPost commentModal={commentModal} setCommentModal={setCommentModal} />
        </Container>
    )
}

export default SingleTweet
const Container = styled.div`
flex:2;
`