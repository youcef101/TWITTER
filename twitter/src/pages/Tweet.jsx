import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import SingleTweet from '../components/SingleTweet'

function Tweet({ setCommentModal, commentModal }) {
    return (
        <Container>
            <LeftBar />
            <SingleTweet commentModal={commentModal} setCommentModal={setCommentModal} />
            <RightBar />
        </Container>
    )
}

export default Tweet
const Container = styled.div`
flex:5;
display:flex;
`