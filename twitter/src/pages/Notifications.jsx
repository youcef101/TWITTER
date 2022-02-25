import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import Notification from '../components/Notification'
import RightBar from '../components/RightBar'

function Notifications() {
    return (
        <Container>
            <LeftBar />
            <Notification />
            <RightBar />
        </Container>
    )
}

export default Notifications
const Container = styled.div`
flex:5;
display:flex;
`