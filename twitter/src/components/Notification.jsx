import React from 'react'
import styled from 'styled-components'
import NotificationNav from './NotificationNav'
import Posts from './Posts'
import SingleNotification from './SingleNotification'

function Notification({ setCommentModal, commentModal }) {
    return (
        <Container>
            <NotificationNav />
            <SingleNotification setCommentModal={setCommentModal} commentModal={commentModal} />
        </Container>
    )
}

export default Notification
const Container = styled.div`
flex:2;
`