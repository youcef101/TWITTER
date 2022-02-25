import React from 'react'
import styled from 'styled-components'
import NotificationNav from './NotificationNav'
import Posts from './Posts'
import SingleNotification from './SingleNotification'

function Notification() {
    return (
        <Container>
            <NotificationNav />
            <SingleNotification />
        </Container>
    )
}

export default Notification
const Container = styled.div`
flex:2;
`