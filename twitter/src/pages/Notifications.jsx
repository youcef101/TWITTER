import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/home/LeftBar'
import Notification from '../components/notification/Notification'
import RightBar from '../components/home/RightBar'

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
//overflow-x:hidden;
`