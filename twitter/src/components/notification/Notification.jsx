import React from 'react'
import styled from 'styled-components'
import NotificationNav from '../notification/NotificationNav'
import SingleNotification from '../notification/SingleNotification'

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