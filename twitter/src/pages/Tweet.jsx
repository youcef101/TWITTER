import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/home/LeftBar'
import RightBar from '../components/home/RightBar'
import SingleTweet from '../components/tweet/SingleTweet'


function Tweet() {
    return (
        <Container>
            <LeftBar />
            <SingleTweet />
            <RightBar />
        </Container>
    )
}

export default Tweet
const Container = styled.div`
width:100%;
display:flex;

`