import React from 'react'
import styled from 'styled-components'
import AddTweet from './AddTweet'
import NavBar from './NavBar'
import Posts from './Posts'
function Middle() {
    return (
        <Container>
            <NavBar />
            <AddTweet />
            <Posts />
        </Container>
    )
}

export default Middle
const Container = styled.div`
flex:2;
`