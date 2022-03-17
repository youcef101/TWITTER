import React from 'react'
import styled from 'styled-components'
import NotificationNav from '../notification/NotificationNav'
import SingleNotification from '../notification/SingleNotification'
import FooterNav from '../responsive/FooterNav'

function Notification() {
    return (
        <Container>
            <NotificationNav />
            <SingleNotification />
            <FooterNav />
        </Container>
    )
}

export default Notification
const Container = styled.div`
flex:2;
`